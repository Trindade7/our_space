import { Injectable } from '@angular/core';
import { DatabaseService } from '@app-core/database.service';
import { CardBackgroungModel } from '@app-core/models/card.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomizeCardService {
  private _backgrounds$!: Observable<CardBackgroungModel[]>;
  private _assetsPath = 'assets';

  constructor (private _dbSvc: DatabaseService) {
    this._backgrounds$ = this._dbSvc.docOrNull$<{ items: CardBackgroungModel[]; }>(
      'cardBackgrounds',
      this._assetsPath
    ).pipe(
      map(backgroundList => backgroundList ? backgroundList.items : []),
    );

  }

  get backgrounds$(): Observable<CardBackgroungModel[]> {
    return this._backgrounds$;
  }
}
