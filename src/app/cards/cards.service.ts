import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DatabaseService } from '../core/database.service';
import { CardModel } from '../core/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private _cardCollectionPath = 'cards';
  private _cards: Observable<CardModel[]>;

  constructor (
    private _dbSvc: DatabaseService,
  ) {
    this._cards = this._dbSvc.collection$<CardModel>('cards');
  }

  get cards(): Observable<CardModel[]> {
    return this._cards;
  }

  card$(id: string): Observable<CardModel | null> {
    return this._dbSvc.docOrNull$<CardModel>(id, this._cardCollectionPath).pipe(
      tap(card => console.log({ card }))
    );
  }

  createCard(card: CardModel): Promise<void> {
    return this._dbSvc.create<CardModel>(card, this._cardCollectionPath);
  }
}
