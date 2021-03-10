import { Injectable } from '@angular/core';
import { AuthService } from '@app-core/auth.service';
import { DatabaseService } from '@app-core/database.service';
import { Logger as logger } from '@app-core/helpers/logger';
import { CardBackgroungModel, CardModel, newCard } from '@app-core/models/card.model';
import { StoreGeneric, StoreModel } from '@app-core/store.generic';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface CardCreator { id: string; name: string; email: string; }
@Injectable({
  providedIn: 'root'
})
export class CreateCardService {
  private _cardsPath = 'cards';

  constructor (
    private _dbSvc: DatabaseService,
    private _authSvc: AuthService,
    private _store: CreateCardStore
  ) {
    this._authSvc.user().then(user => {
      const creator = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      const card = newCard();
      card.creator = {
        id: user.id,
        name: user.name,
        email: user.email
      };
      this._store.patch({ card, creator },);
    });
  }

  saveCard(): Promise<void> {
    logger.startCollapsed('[create-card.service] createCard()');
    this._store.patch({ loading: true });

    return this._store.card$.pipe(
      map(card => {
        this._dbSvc.create<CardModel>(card, this._cardsPath).then(
          () => this._store.resetCard()
        ).finally(() => {
          this._store.patch({ loading: false });
          logger.endCollapsed([]);
        });
      })
    ).toPromise();
  }
}


// *################## CREATE STORE STATE ###################
export enum PAGES { 'TEXT', 'CUSTOMIZE', 'PREVIEW' };
interface CreateCardModel extends StoreModel {
  currentPage: PAGES;
  card: CardModel;
  creator: CardCreator;
}

@Injectable({ providedIn: 'root' })
export class CreateCardStore extends StoreGeneric<CreateCardModel>{
  protected store = 'CreateCard-store';

  constructor () {
    super({
      loading: false,
      error: null,
      currentPage: PAGES.TEXT,
      card: newCard()
    });
  }

  get currentPage$(): Observable<PAGES> {
    return this.state$.pipe(
      map(state => {
        return state.currentPage;
      })
    );
  }

  get card$(): Observable<CardModel> {
    return this.state$.pipe(
      map(state => state.card)
    );
  }

  get isValid$(): Observable<boolean> {
    return this.state$.pipe(
      map(state => !(state.card.message.length > 5))
    );
  }

  set background(background: CardBackgroungModel) {
    const card = this.state.card;
    card.background = background;

    this.patch({ card }, `change background to ${background}`);
  }

  set backgroundSize(size: number) {
    const card = this.state.card;
    card.background.size = size;

    this.patch({ card }, `change background size to ${size}`);
  }

  set message(message: string) {
    const card = this.state.card;
    card.message = message;

    this.patch({ card }, `change background message to ${message}`);
  }

  set textColor(color: string) {
    const card = this.state.card;
    card.textColor = color;

    this.patch({ card }, `change textColor to ${color}`);
  }

  resetCard(): void {
    const card = newCard();
    card.creator = this.state.creator;
    this.patch({ card }, `Reset card`);
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
}
