import { Injectable } from '@angular/core';
import { AuthService } from '@app-core/auth.service';
import { DatabaseService } from '@app-core/database.service';
import { CardModel } from '@app-core/models/card.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsManagementService {
  private _cardCollectionPath = 'cards';
  private _cards: Observable<CardModel[]>;

  constructor (
    private _dbSvc: DatabaseService,
    private _authSvc: AuthService,
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

  async createCard(card: CardModel): Promise<void> {
    console.group('[cards.service] createCard() start');
    // const user = await this._authSvc.user();
    card.createdBy = 'José Trindade';
    return this._dbSvc.create<CardModel>(card, this._cardCollectionPath);
  }
}
