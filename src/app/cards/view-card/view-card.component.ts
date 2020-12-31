import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CardModel, mockCard } from '../../core/models/card.model';
import { CardsService } from '../cards.service';

@Component({
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.scss']
})
export class ViewCardComponent implements OnInit {
  card: CardModel = mockCard();
  card$!: Observable<CardModel | null>;

  constructor (
    private _router: Router,
    private _route: ActivatedRoute,
    private _cardsSvc: CardsService,
  ) {
    const id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this.card$ = this._cardsSvc.card$(id);
    } else {
      this._router.navigateByUrl('/404');
    }
  }

  ngOnInit(): void { }

  goBack(): void {
    this._router.navigateByUrl('/');
  }
}
