import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {
  counter = 2;
  constructor (private _location: Location) { }

  ngOnInit(): void {
    this.startTimer();
  }

  startTimer(): void {
    setInterval(() => {
      if (this.counter <= 0) {
        this._location.back();
      } else {
        console.log(this.counter);
        this.counter = this.counter - 1;
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    this.counter = 3;
  }
}
