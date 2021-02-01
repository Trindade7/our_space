import { Component, OnInit } from '@angular/core';
import { mockCard } from '@app-core/models/card.model';

import { CreateCardService } from './create-card.service';

@Component({
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {

  constructor (public createSvc: CreateCardService) {
  }

  ngOnInit(): void {
    console.log('cc\n', this.createSvc.backgrounds$);
  }

  saveCard() {
    this.createSvc.saveCard(mockCard());
  }
}
