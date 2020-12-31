import { Location } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardModel } from 'src/app/core/models/card.model';

import { CardsService } from '../cards.service';
import { CardModel } from '../core/models/card.model';

enum STATES {
  TEXT,
  STYLIZE,
  PREVIEW
}

@Component({
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit, AfterViewInit {
  @ViewChild('messageInput') messageInput!: ElementRef<HTMLTextAreaElement>;
  card: CardModel = {
    id: '',
    createdAt: {
      milliseconds: new Date().getMilliseconds(),
      seconds: new Date().getSeconds()
    },
    backgroundColor: '#fff',
    backgroundImageUrl: '',
    message: '',
    textColor: '#000',
  };
  STATE_OPTIONS = STATES;
  currentState: STATES = STATES.TEXT;
  textColors: string[] = [
    'purple',
    'lime',
    'beige',
    'pink',
    'orange',
    'black',
    'white',
    'darkcyan',
    'green'
  ];

  pickingColor = true;

  constructor (private _location: Location, private _cardsSvc: CardsService) { }
  ngOnInit(): void { }

  ngAfterViewInit() {
    this.messageInput.nativeElement.focus();
  }

  goBack(): void {
    this._location.back();
  }

  next(): void {
    if (this.currentState === STATES.PREVIEW) {
      this.currentState = STATES.TEXT;
    } else {
      this.currentState++;
    }
  }

  prev(): void {
    if (this.currentState === STATES.TEXT) {
      this.currentState = STATES.PREVIEW;
    } else {
      this.currentState--;
    }
  }

  selectPicker(picker: 'color' | 'background' = 'color') {
    picker === 'color' ? this.pickingColor = true
      : this.pickingColor = false;
  }

  setBackground(background: string): void {
    console.log(this.card);
    const newCard = { ...this.card };
    newCard.backgroundColor = background;
    this.card = newCard;
  }

  setBackgroundColor(background: string): void {
    console.log(this.card);
    const newCard = { ...this.card };
    newCard.backgroundColor = background;
    this.card = newCard;
  }

  setColor(color: string): void {
    console.log(this.card);
    const newCard = { ...this.card };
    newCard.textColor = color;
    this.card = newCard;
  }

  submitCard(): void {
    // TODO: validate card content
    this._cardsSvc.createCard(this.card);
  }
}