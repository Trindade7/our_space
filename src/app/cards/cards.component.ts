import { Component, OnInit } from '@angular/core';

import { CardModel, mockCard } from '../core/models/card.model';

@Component({
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: CardModel[] = [mockCard()];

  constructor () { }

  ngOnInit(): void {
  }

}
