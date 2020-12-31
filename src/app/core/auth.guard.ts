import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private _router: Router,
    private _auth: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._auth.userOrNull$.pipe(
      map(userOrNull => !!userOrNull),
      tap(signedIn => signedIn ?? this._router.navigateByUrl('/login'))
    );
  }

  // constructor (
  //   private _router: Router,
  //   private _auth: AuthService
  // ) { }

  // CanActivate(): Observable<boolean> {
  //   return this._auth.userOrNull$.pipe(
  //     map(userOrNull => !!userOrNull),
  //     tap(signedIn => signedIn ?? this._router.navigateByUrl('/login'))
  //   );
  // }
}
