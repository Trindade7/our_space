import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CardModel, mockCard } from '../core/models/card.model';

@Component({
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  card: CardModel = mockCard();

  constructor (private _router: Router) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this._router.navigateByUrl('/');
  }
}
