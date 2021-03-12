import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { watch } from 'rxjs-watcher';
import { map, tap } from 'rxjs/operators';

import { Logger as logger } from './helpers/logger';

interface CollectionQueryModel {
  limit?: number;
  limitToLast?: number;
  orderBy?: 'createdAt';
  orderDirection?: 'asc' | 'desc';
  where?: string;
}

export interface BatchDocModel {
  path: string;
  doc: unknown;
  update?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private _defaultQuery: CollectionQueryModel = {
    orderBy: 'createdAt',
    // orderDirection: null,
    // limitToLast: 10,
    limit: 10,
  };

  constructor (private _firestore: AngularFirestore) { }

  private get _getServerTimeStamp(): unknown {
    // return firebase.default.firestore.FieldValue.serverTimestamp();
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  createId(): string {
    return this._firestore.createId();
  }

  // private _genQuery(
  //   ref: firebase.firestore.Query<firebase.firestore.DocumentData>,
  //   query: CollectionQueryModel
  // ): firebase.firestore.Query<firebase.firestore.DocumentData> {
  //   const refFiltered: any = ref;
  //   const queryFilters: any = query;

  //   Object.keys(query).forEach(key => refFiltered[key] = queryFilters[key]);

  //   console.log({ refFiltered });
  //   return refFiltered;
  // }

  /**
   *
   *
   * Returns an Observable of a collection of items from a given query options.
   *
   * Default options are:
   *
   * #orderBy: 'createdAt',
   *
   * #orderDirection: 'asc',
   *
   * #limitTo: 20,
   *
   * #path: null,
   *
   */
  collection$<T>(
    path: string,
    query: CollectionQueryModel = this._defaultQuery
  ): Observable<T[]> {
    logger.collapsed(`[database.service] [collection$] from ${path}`, [query]);

    return this._firestore
      .collection<T>(path, ref => {
        return ref.limitToLast(query.limitToLast ?? 10)
          .orderBy(
            query.orderBy ?? 'createdAt',
            query.orderDirection ?? 'desc'
          );
      })
      .valueChanges({ idField: 'id' })
      .pipe(
        watch('[database.service] collection$()', 2),
        tap(data => logger.collapsed('[database.service] collection$', [data]))
      );
  }

  /**
   *
   * Returns a collection snapshot.
   *
   */
  collection<T>(
    path: string,
    query: Partial<CollectionQueryModel> = this._defaultQuery
  ): Promise<T[]> {
    logger.collapsed(`[database.service] [collection] from ${path}`, [query]);

    return this._firestore
      .collection<T>(path, ref => {
        const collectionRef = Object.assign(ref, query);

        return collectionRef;
      })
      .valueChanges({ idField: 'id' })
      .pipe(
        tap(res =>
          logger.collapsed('[database.service] collection()', [
            'Response\n',
            res,
          ])
        )
      )
      .toPromise();
  }

  docOrNull$<T>(id: string, collectionPath: string): Observable<T | null> {
    logger.collapsed(`[database.service] [docOrNull$()] from ${collectionPath}`, [
      `\ngetting doc from ${collectionPath} with id: ${id}`,
    ]);

    const fullPath = `${collectionPath}/${id}`;

    return this._firestore
      .doc<T>(fullPath)
      .valueChanges({ idField: 'id' })
      .pipe(
        tap(
          // LOGGING DATA
          val =>
            logger.collapsed(`RESPONSE streaming from [${fullPath}]`, [val]),
          err =>
            logger.collapsed(`ERROR streaming from [${fullPath}] `, [err])
        ),
        map(doc => (doc ? ((doc as unknown) as T) : null))
      );
  }

  /**
   *
   * Returns a document snapshot.
   *
   */
  // docOrNull<T>(id: string, collectionPath: string): Promise<T | null> {
  //   logger.startCollapsed('[database.service] [docOrNull()]', [
  //     { log: ['id:', id, '\ncollectionPath', collectionPath], type: 'warn' },
  //   ]);

  //   return this._firestore
  //     .doc<T>(`${collectionPath}/${id}`)
  //     .valueChanges({ idField: 'id' })
  //     .pipe(
  //       map(doc => (doc as unknown) as T),
  //       take(1)
  //     )
  //     .toPromise();
  // }

  create<T>(
    document: T,
    collectionPath: string,
    docId?: string
  ): Promise<void> {
    logger.collapsed('[database.service] [create()]', [
      `documentId: ${docId}`,
      'document',
      document,
      `path: ${collectionPath}`,
    ]);

    const id: string = docId ?? this.createId();
    if ((document as any).id) {
      logger.collapsed('[database.service] create', [{ document }, 'deleting id']);
      delete ((document as any).id);
    }

    return this._firestore.doc(`${collectionPath}/${id}`).set(
      {
        ...document,
        // lastUpdate: this._getServerTimeStamp,
        createdAt: this._getServerTimeStamp,
      },
      { merge: true }
    );
  }

  updateArray(arrayKey: string, vals: any[], data: any): any {
    data[arrayKey] = firebase.firestore.FieldValue.arrayUnion(...vals);
  }

  /**
   *
   * Obs: Array updates only one layer deep
   */
  update<T>(
    document: T,
    collectionPath: string,
    docId: string,
    addToArray?: { arrayKey: string, vals: any[]; },
    removeFromArray?: { arrayKey: string, vals: any[]; }
  ): Promise<void> {
    logger.collapsed('[database.service] [update()]', [
      `documentId: ${docId}`,
      'document',
      document,
      addToArray,
      `path: ${collectionPath}`,
    ]);

    if (addToArray) {
      (document as any)[addToArray.arrayKey] = firebase.firestore.FieldValue.arrayUnion(...addToArray.vals);
    }
    if (removeFromArray) {
      (document as any)[removeFromArray.arrayKey] = firebase.firestore.FieldValue.arrayRemove(...removeFromArray.vals);
    }

    return this._firestore
      .collection(collectionPath)
      .doc(docId)
      .update({ ...document });
  }

  delete(id: string, collectionPath: string): Promise<void> {
    logger.collapsed('[database.service] [delete()]', [
      `documentId: ${id}`,
      `path: ${collectionPath}`,
    ]);

    return this._firestore
      .collection(collectionPath)
      .doc(id)
      .delete()
      .then(() => logger.endCollapsed());
  }

  // genUpdateArrayFunction(value: any): any {
  //   return firebase.firestore.FieldValue.arrayUnion(value);
  // }

  batchWrite(batchDocs: BatchDocModel[]): Promise<void> {
    logger.collapsed('[database.service] #batchWriteDoc', [batchDocs]);

    const batch = this._firestore.firestore.batch();

    for (const batchDoc of batchDocs) {
      logger.collapsed(`writing batchData of ${batchDoc.update}`, [batchDoc]);

      const docRef = this._firestore.doc(batchDoc.path).ref;

      batchDoc.update
        ? batch.update(docRef, { ...batchDoc.doc as any })
        : batch.set(docRef, { ...batchDoc.doc as any });
    }

    return batch
      .commit()
      .finally(() => logger.collapsed('[database.service] end', []));
  }

  // *#################### FIRE STORAGE

  // addFile(inputFile: File, filePath: string): FileUploadTask {
  //   logger.collapsed(
  //     '[database.service] [addFile()]',
  //     ['file', inputFile, `filePath:${filePath}`]
  //   );
  //   const task = this.storage.upload(filePath + '/' + inputFile.name, inputFile);
  //   return {
  //     cancel: task.cancel,
  //     pause: task.pause,
  //     resume: task.resume,
  //     percentageChanges: task.percentageChanges(),
  //     onComplete: task.then(f => f.ref.getDownloadURL()),
  //   };
  // }

  /// Delete a file
  // deleteFile(filePath: string): Observable<any> {
  //   logger.collapsed('[database.service] [deleteFile()]', [`filePath: ${filePath}`]);
  //   return this.storage.ref(filePath).delete();
  // }
}
