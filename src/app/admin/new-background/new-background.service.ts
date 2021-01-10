import { Injectable } from '@angular/core';
import { DatabaseService } from 'src/app/core/database.service';
import { CardBackgroungModel } from 'src/app/core/models/card.model';

import { StorageDbService } from '../storage-db.service';

@Injectable({
  providedIn: 'root'
})
export class NewBackgroundService {
  private _backgroundPath: string = '/assets/backgrounds';
  constructor (
    private _dbSvc: DatabaseService,
    private _storageSvc: StorageDbService
  ) { }

  addBackground(background: CardBackgroungModel, backgroundFile: File): Promise<void> {
    const backgroundInfo = background;
    return this._storageSvc.addBackground(backgroundFile).then(
      (res: string) => {
        background.imageUrl = res;
        return this._dbSvc.create(background, this._backgroundPath);
      },
      err => err
    );
  }
}
