import { Injectable } from '@angular/core';
import { AuthService } from '@app-core/auth.service';
import { DatabaseService } from '@app-core/database.service';
import { Logger as logger } from '@app-core/helpers/logger';
import { CardBackgroungModel, CardModel, newCard } from '@app-core/models/card.model';
import { StoreGeneric, StoreModel } from '@app-core/store.generic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO: #1 add feature create card
@Injectable({
  providedIn: 'root'
})
export class CreateCardService {
  private _cardsPath = 'cards';
  private _cardBackgroundsPath = 'assets';

  _card: CardModel;

  constructor (
    private _dbSvc: DatabaseService,
    private _authSvc: AuthService,
    private _store: CreateCardStore
  ) {
    this._card = newCard();
    this._authSvc.user().then(user => this._card.creator = {
      name: user.name,
      email: user.email
    });

    // TODO: #2 move to selectBackground?
    this._dbSvc
      .docOrNull$<{ items: CardBackgroungModel[]; }>(
        'cardBackgrounds',
        this._cardBackgroundsPath
      ).pipe(
        map(backgroundList => backgroundList ? backgroundList.items : [])
      ).subscribe(
        backgrounds => _store.patch({ backgrounds }, 'get backgrounds')
      );
  }

  get card(): CardModel {
    return this._card;
  }

  get backgrounds$(): Observable<CardBackgroungModel[]> {
    return this._store.state$.pipe(
      map(state => state.backgrounds ?? [])
    );
  }

  set setCardBackground(background: CardBackgroungModel) {
    this._card.background = background;
    this._updateCard();
  }
  set setCardBackgroundSize(size: number) {
    this._card.background.size = size;
    this._updateCard();
  }

  set setTextColor(color: string) {
    this._card.textColor = color;
    this._updateCard();
  }

  get currentPage$(): Observable<PAGES> {
    return this._store.state$.pipe(
      map(
        state => state.currentPage
      )
    );
  }

  nextPage(): void {
    if (this._store.state.currentPage === 2) {
      logger.collapsed('[create-card.service] nextState()', ['already on last page']);
      return;
    }
    // console.log(this._store.state.currentPage + 1);
    this._store.patch({ currentPage: this._store.state.currentPage + 1 }, 'next page');
  }

  prevPage(): void {
    if (this._store.state.currentPage === 0) {
      logger.collapsed('[create-card.service] prevState()', ['already on first page']);
      return;
    }
    this._store.patch({ currentPage: this._store.state.currentPage - 1 }, 'prev page');
  }

  private _updateCard() {
    // re-renders card preview component
    this._card = { ...this._card };
  }

  // saveCard(): Promise<void> {
  saveCard(): any {
    logger.startCollapsed('[create-card.service] createCard()', [this._card]);

    // return this._dbSvc.create<CardModel>(card, this._cardsPath)
    //   .finally(() => logger.endCollapsed([]));
  }
}



// *################## CREATE STORE STATE ###################
export enum PAGES {
  TEXT,
  CUSTOMIZE,
  PREVIEW
}
interface CreateCardModel extends StoreModel {
  backgrounds: CardBackgroungModel[];
  currentPage: PAGES;
}

@Injectable({ providedIn: 'root' })
class CreateCardStore extends StoreGeneric<CreateCardModel>{
  protected store = 'CreateCard-store';

  constructor () {
    super({
      loading: false,
      error: null,
      currentPage: PAGES.CUSTOMIZE
    });
  }
}
