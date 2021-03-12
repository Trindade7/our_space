import { Component, OnInit } from '@angular/core';
import { Logger as logger } from '@app-core/helpers/logger';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';

import { CreateCardService, CreateCardStore, PAGES } from './create-card.service';

@Component({
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent implements OnInit {
  pages = PAGES;
  pageName: Observable<string>;

  constructor (
    public appSvc: AppService,
    public createSvc: CreateCardService,
    public store: CreateCardStore

  ) {
    this.pageName = this.store.currentPage$.pipe(
      map(index => ['TEXT', 'CUSTOMIZE', 'PREVIEW'][index])
    );
  }

  ngOnInit(): void {
  }

  saveCard(): void {
    const confirmSave = confirm('Deseja salvar?');
    if (!confirmSave) {
      return;
    }

    this.createSvc.saveCard()
      .then(() => alert('Salvo com sucesso :)'))
      .catch(err => {
        logger.collapsed('[create-card.component] saveCard()', [{ err }]);
        alert('ERRO AO SALVAR :(');
      });
  }
}
