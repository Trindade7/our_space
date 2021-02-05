import { Injectable } from '@angular/core';
import { CardBackgroungModel } from '@app-core/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CustomizeCardService {
  private _backgrounds: CardBackgroungModel[] = [];

  constructor () {

  }
}
