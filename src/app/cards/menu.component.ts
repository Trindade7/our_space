import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '@app-core/auth.service';

@Component({
  selector: 'app-menu',
  template: `
    <div class="menu-container flexed col center">
      <span class="spacer"></span>

      <div class="avatar">
        <img [src]="(user | async)?.photoUrl" alt="user avatar">
      </div>
      <div class="sized-box"></div>
      <h3 class="text-center">{{(user | async)?.name | uppercase}}</h3>

      <span class="spacer"></span>

      <div class="logout padded flexed center">
        <a href="#" (click)="authSvc.logout()">
          <h3>logout</h3>
        </a>
      </div>
    </div>
  `,
  styles: [`
    .menu-container {
      height: 100%;
      background-color: whitesmoke;
    }

    .avatar {
      background: lightgray;
      border-radius: 50%;
      overflow: hidden;

      .img {
        width: 150px;
        height: 150px;
      }
    }

    .logout{
      width: 100%;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  user = this.authSvc.userOrNull$;

  constructor (public authSvc: AuthService) { }

  ngOnInit(): void {
  }
}
