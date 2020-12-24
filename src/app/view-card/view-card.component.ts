import { Component, OnInit } from '@angular/core';

import { CardModel, mockCard } from '../core/models/card.model';

@Component({
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  card: CardModel = mockCard();

  constructor () { }

  ngOnInit(): void {
  }

}
