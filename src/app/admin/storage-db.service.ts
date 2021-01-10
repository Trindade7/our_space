import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageDbService {
  private _backgroundPath: string = '/cards/backgrounds/';

  constructor (private _storageSvc: AngularFireStorage) { }

  addBackground(background: File): Promise<any> {
    return this._storageSvc.upload(this._backgroundPath, background).then(
      res => res.ref.getDownloadURL()
    );
  }
}
