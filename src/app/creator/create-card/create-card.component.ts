import { Component, OnInit } from '@angular/core';
import { mockCard } from '@app-core/models/card.model';
import { AppService } from 'src/app/app.service';

import { CreateCardService } from './create-card.service';

@Component({
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  currentPage!: string;

  showNextPageButton = true;
  showPrevPageButton = false;
  showSubmitButton = false;

  canSubmit = false;

  constructor (
    public appSvc: AppService,
    public createSvc: CreateCardService
  ) {
    this.createSvc.currentPage$.subscribe(
      page => {
        switch (page) {
          case 0:
            this.currentPage = 'TEXT';
            this.showPrevPageButton = false;
            this.showNextPageButton = true;
            break;
          case 1:
            this.currentPage = 'CUSTOMIZE';
            this.showPrevPageButton = true;
            this.showNextPageButton = true;
            this.showSubmitButton = false;
            break;

          default:
            this.currentPage = 'PREVIEW';
            this.showNextPageButton = false;
            this.showSubmitButton = true;
            break;
        }
      });

  }

  ngOnInit(): void {
  }

  saveCard() {
    this.createSvc.saveCard(mockCard());
  }
}
