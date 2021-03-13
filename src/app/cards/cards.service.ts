import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { watch } from 'rxjs-watcher';
import { switchMap } from 'rxjs/operators';

import { AuthService } from '../core/auth.service';
import { DatabaseService } from '../core/database.service';
import { CardModel } from '../core/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _cardCollectionPath = 'pairs';
  private _cards$: Observable<CardModel[]>;

  constructor (
    private _dbSvc: DatabaseService,
    private _authSvc: AuthService,
  ) {
    this._cards$ = this._authSvc.userOrNull$.pipe(
      switchMap(user => {
        if (!user) {
          throw new Error("Not logged in");
        }

        if (user.pairs?.length) {
          this._cardCollectionPath = `pairs/${user.pairs[0]}/cards`;
        } else {
          this._cardCollectionPath = `pairs/${user.id}/cards`;
        }
        return this._dbSvc.collection$<CardModel>(this._cardCollectionPath);
      }),
      watch('[cards.service] userOrNull$ to cards$ switchMap')
    );
  }

  get cards$(): Observable<CardModel[]> {
    return this._cards$;
  }

  card$(id: string): Observable<CardModel | null> {
    return this._authSvc.userOrNull$.pipe(
      switchMap(user => {
        if (!user) {
          throw new Error("Not logged in");
        }

        if (user.pairs?.length) {
          this._cardCollectionPath = `pairs/${user.pairs[0]}/cards`;
        } else {
          this._cardCollectionPath = `pairs/${user.id}/cards`;
        }
        return this._dbSvc.docOrNull$<CardModel>(id, this._cardCollectionPath);
      }),
      watch('[cards.service] userOrNull$ to cards$ switchMap')
    );
  }
}
