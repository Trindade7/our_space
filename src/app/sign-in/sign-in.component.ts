import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginError = false;
  loginErrorMessage = '';
  loading = false;

  constructor (
    private _authSvc: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  googleSignIn(): void {
    this.loading = true;
    this._authSvc.googleSignIn().then(
      () => this._router.navigateByUrl('/hello'),
    ).catch(err => {
      console.log(err);
      this.loginErrorMessage = err.message ?? 'Login error';
    }).finally(() => this.loading = false);
  }

  facebookSignIn(): void {
    this.loading = true;
    this._authSvc.facebookSignIn().then(
      () => this._router.navigateByUrl('/hello'),
    ).catch(err => {
      console.log(err);
      this.loginErrorMessage = err.message ?? 'Login error';
    }).finally(() => this.loading = false);
  };

}
