import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardBackgroungModel } from '@app-core/models/card.model';

import { CreateCardService } from '../create-card.service';

const TEXT_COLORS = [
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

@Component({
  selector: 'app-customize-card',
  templateUrl: './customize-card.component.html',
  styleUrls: ['./customize-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizeCardComponent implements OnInit {
  customizingZone: 'background' | 'color' | 'font' = 'background';

  textColors: string[] = TEXT_COLORS;

  constructor (public crateCardSvc: CreateCardService) { }

  ngOnInit(): void {
  }

  setBackground(background: CardBackgroungModel) {
    // logger.collapsed('[customize-card.component] set', [{ background }]);
    this.crateCardSvc.setCardBackground = background;
  }

  set setBackgroundSize(size: number) {
    console.log({ size }, '\n bck size=>', this.crateCardSvc._card.background.size);

    this.crateCardSvc._card.background.size = size;
    console.log('\n new bck size =>', this.crateCardSvc._card.background.size);

  }
}
