import { Injectable } from '@angular/core';
import { AuthService } from '@app-core/auth.service';
import { DatabaseService } from '@app-core/database.service';
import { Logger as logger } from '@app-core/helpers/logger';
import { CardBackgroungModel, CardModel, newCard } from '@app-core/models/card.model';
import { StoreGeneric, StoreModel } from '@app-core/store.generic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface CardCreatorModel { id: string; name: string; email: string; }
@Injectable({
  providedIn: 'root'
})
export class CreateCardService {
  private _cardsPath = 'pairs';

  constructor (
    private _dbSvc: DatabaseService,
    private _authSvc: AuthService,
    private _store: CreateCardStore
  ) {
    this._authSvc.userOrNull$.pipe(
      map(user => {
        if (!user) {
          throw new Error("Not logged in");
        }

        return {
          creator: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
          pairs: user.pairs
        };
      })
    ).subscribe(({ creator, pairs }) => {
      if (pairs?.length) {
        this._cardsPath = `pairs/${pairs[0]}/cards`;
      } else {
        this._cardsPath = `pairs/${creator.id}/cards`;
      }

      this._store.patch({ creator }, 'Creator update');
    });
  }

  saveCard(): Promise<any> {
    this._store.patch({ loading: true }, 'loading => true');
    logger.startCollapsed('[create-card.service] createCard()');
    this._store.card.creator = this._store.creator;

    logger.collapsed('store.card data', [this._store.card]);

    return this._dbSvc.create<CardModel>(this._store.card, this._cardsPath).then(
      () => this._store.resetCard()
    ).finally(() => {
      this._store.patch({ loading: false }, 'loading => false');
      logger.endCollapsed([]);
    });
  }
}


// *################## CREATE STORE STATE ###################
export enum PAGES { 'TEXT', 'CUSTOMIZE', 'PREVIEW' };
interface CreateCardModel extends StoreModel {
  currentPage: PAGES;
  creator: CardCreatorModel;
}

@Injectable({ providedIn: 'root' })
export class CreateCardStore extends StoreGeneric<CreateCardModel>{
  protected store = 'CreateCard-store';
  card: CardModel = newCard();

  constructor () {
    super({
      loading: false,
      error: null,
      currentPage: PAGES.TEXT,
    });
  }

  get currentPage$(): Observable<PAGES> {
    return this.state$.pipe(
      map(state => {
        return state.currentPage;
      })
    );
  }

  nextPage(): void {
    if (this.state.currentPage === 2) {
      return;
    }

    this.patch({ currentPage: this.state.currentPage + 1 }, 'next page');
  }

  prevPage(): void {
    if (this.state.currentPage === 0) {
      return;
    }
    this.patch({ currentPage: this.state.currentPage - 1 }, 'prev page');
  }

  set background(backgroundData: CardBackgroungModel) {
    this.card.background = backgroundData;
    this.card = Object.assign({}, this.card);
  }
  set backgroundSize(size: number) {
    this.card.background.size = size;
    this.card = Object.assign({}, this.card);
  }
  set textColor(color: string) {
    this.card.textColor = color;
    this.card = Object.assign({}, this.card);
  }

  get isValid(): boolean {
    return !(this.card.message.length > 5);
  }

  get creator(): CardCreatorModel {
    return this.state.creator;
  }

  resetCard(): void {
    this.card = newCard();
    this.card.creator = this.state.creator;
    this.patch({ currentPage: PAGES.TEXT });
  }
}
