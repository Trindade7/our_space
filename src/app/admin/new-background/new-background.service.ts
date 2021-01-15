import { Injectable } from '@angular/core';
import { DatabaseService } from '@app-core/database.service';
import { Logger as logger } from '@app-core/helpers/logger';
import { CardBackgroungModel } from '@app-core/models/card.model';

import { StorageDbService } from '../storage-db.service';

@Injectable({
  providedIn: 'root'
})
export class NewBackgroundService {
  private _backgroundDbPath = 'assets/card-backgrounds';
  private _backgroundStoragePath = 'cards/backgrounds';
  constructor (
    private _dbSvc: DatabaseService,
    private _storageSvc: StorageDbService
  ) { }

  addBackground(background: CardBackgroungModel, backgroundFile: File): Promise<void> {
    const backgroundInfo = background;
    const filePath = `${this._backgroundStoragePath}/${backgroundFile.name}`;


    return this._storageSvc.addBackground(backgroundFile, filePath).then(
      (res: string) => {
        background.imageUrl = res;
        // this.
        return this._dbSvc.create(background, this._backgroundDbPath);
      },
      err => logger.startCollapsed('[new-background.service] ERROR: addBackground()', [err])
    );
  }
}
