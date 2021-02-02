import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // TODO: MOVE TO CORE?
  constructor (private _location: Location) { }

  goBack(): void {
    // TODO: go to start when current locattion === last
    this._location.back();
  }
}
