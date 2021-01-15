import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Logger as logger } from '@app-core/helpers/logger';

@Injectable({
  providedIn: 'root'
})
export class StorageDbService {
  private _backgroundPath: string = 'cards/backgrounds';

  constructor (private _storageSvc: AngularFireStorage) { }

  addBackground(background: File, path: string): Promise<any> {
    return this._storageSvc.upload(path, background).then(
      res => res.ref.getDownloadURL(),
      err => logger.collapsed('[storage-db.service] ERROR: addBackground()', [err])
    );
  }
}
