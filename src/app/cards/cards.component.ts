import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CardModel } from '../core/models/card.model';
import { CardsService } from './cards.service';

@Component({
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  showMenu = false;
  cards$: Observable<CardModel[]>;

  constructor (public cardsSvc: CardsService) {
    this.cards$ = this.cardsSvc.cards$;
  }

  ngOnInit(): void {
  }

  prev(): void { }
  next(): void { }
}
