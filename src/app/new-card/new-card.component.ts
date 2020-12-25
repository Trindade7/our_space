import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { CardModel } from '../core/models/card.model';

@Component({
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit, AfterViewInit {
  card: Omit<Omit<CardModel, 'dateCreated'>, 'id'> = {
    backgroundColor: '#fff',
    backgroundImageUrl: '',
    message: '',
    textColor: '#000',
  };

  @ViewChild('messageInput') messageInput!: ElementRef<HTMLTextAreaElement>;

  current = 0;

  constructor (private _location: Location) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.messageInput.nativeElement.focus();
  }

  goBack(): void {
    this._location.back();
  }

  next(): void {
    this.current++;
    if (this.current === 3) {
      this.current = 0;
    }
  }

  prev(): void {
    if (this.current === 0) {
      this.current = 2;
      return;
    }
    this.current--;
  }
}
