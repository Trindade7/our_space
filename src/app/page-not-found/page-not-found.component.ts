import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  template: `
    <div class="not-found-page flexed col center">
      <h2>Nothing here :(</h2>

      <div class="sized-box-2"></div>

      <strong>Redirecting to homepage in {{counter}} </strong>
      <a [routerLink]="['/cards']" class="btn outline">
        HOME
      </a>
    </div>
`,
  styles: [`
    .not-found-page{
    height: 100vh;
    text-align: center;
    }
  `]
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  counter = 3;
  interval: any;

  constructor (public location: Location) { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.counter <= 0) {
        this.location.back();
      } else {
        this.counter--;
      }
    }, 1000);
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
