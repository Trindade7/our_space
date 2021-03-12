import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app-core/auth.service';
import { UserModel } from '@app-core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // TODO: MOVE TO CORE?
  private _user: UserModel | null = null;
  constructor (
    private _location: Location,
    private _router: Router,
    private _userSvc: AuthService
  ) {
    this._userSvc.userOrNull$.subscribe(
      user => this._user = user,
      err => {
        throw new Error(err);
      });
  }

  get user(): UserModel | null {
    return this._user;
  }

  goBack(): void {
    // TODO: go to start when current locattion === last
    this._location.back();
  }
  goHome(): void {
    // TODO: go to start when current locattion === last
    this._router.navigateByUrl('/cards');
  }
}
