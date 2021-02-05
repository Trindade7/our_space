import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // TODO: MOVE TO CORE?
  constructor (
    private _location: Location,
    private _router: Router
  ) { }

  goBack(): void {
    // TODO: go to start when current locattion === last
    this._location.back();
  }
  goHome(): void {
    // TODO: go to start when current locattion === last
    this._router.navigateByUrl('/cards');
  }
}
