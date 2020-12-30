import { Injectable } from '@angular/core';

import { AuthService } from '../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor (private _authSvc: AuthService) {

  }
}
