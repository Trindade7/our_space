import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor (
    private _router: Router,
    private _auth: AuthService
  ) { }

  canActivate(): Observable<boolean> {
    // return of(true);
    return this._auth.userOrNull$.pipe(
      take(1),
      map(userOrNull => {
        if (userOrNull && userOrNull.email === 'trindade.jose@gmail.com') {
          return true;
        }
        return false;
      }),
      tap(signedIn => {
        if (!signedIn) {
          this._router.navigateByUrl('/cards');
        }
      })
    );
  }

}
