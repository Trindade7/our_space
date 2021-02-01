import { Injectable } from '@angular/core';
import { AuthService } from '@app-core/auth.service';
import { DatabaseService } from '@app-core/database.service';
import { CardBackgroungModel, CardModel } from '@app-core/models/card.model';
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

  constructor (
    private _dbSvc: DatabaseService,
    private _authSvc: AuthService,
    private _store: CreateCardStore
  ) {
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

  get backgrounds$(): Observable<CardBackgroungModel[]> {
    return this._store.backgrounds$;
  }

  // card$(id: string): Observable<CardModel | null> {
  //   return this._dbSvc.docOrNull$<CardModel>(id, this._cardsPath).pipe(
  //     tap(card => console.log({ card }))
  //   );
  // }

  async saveCard(card: CardModel): Promise<void> {
    console.group('[cards.service] createCard()');
    console.log('\n\n', this._authSvc.user(), '\n\n');

    // const user = await this._authSvc.user();
    // card.createdBy = 'José Trindade';
    // return this._dbSvc.create<CardModel>(card, this._cardsPath);
  }
}



// *################## CREATE STORE STATE ###################
interface CreateCardModel extends StoreModel {
  backgrounds: CardBackgroungModel[];
}

@Injectable({ providedIn: 'root' })
class CreateCardStore extends StoreGeneric<CreateCardModel>{
  protected store = 'CreateCard-store';

  constructor () {
    super({
      loading: false,
      error: null,
    });
  }

  get backgrounds$(): Observable<CardBackgroungModel[]> {
    return this.state$.pipe(
      map(state => state.backgrounds ?? [])
    );
  }
}
