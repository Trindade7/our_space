import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private _router: Router,
    private _auth: AuthService
  ) { }

  canActivate(): Observable<boolean> {
    return of(true);
    // return this._auth.userOrNull$.pipe(
    //   take(1),
    //   map(userOrNull => !!userOrNull),
    //   tap(signedIn => {
    //     if (!signedIn) {
    //       console.log('NOT logged in, REDIRECTING');
    //       this._router.navigate(['/login']);
    //     }
    //   })
    // );
  }
}
