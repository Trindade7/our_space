import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardBackgroungModel, createColorBackground } from '@app-core/models/card.model';

import { CreateCardService } from '../create-card.service';
import { CustomizeCardService } from './customize-card.service';

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
  backgroundColors: CardBackgroungModel[];

  constructor (
    public crateCardSvc: CreateCardService,
    public customizeSvc: CustomizeCardService
  ) {
    this.backgroundColors = this.textColors.map(
      color => createColorBackground(color)
    );
  }

  ngOnInit(): void {
  }

  setBackground(background: CardBackgroungModel) {
    // logger.collapsed('[customize-card.component] set', [{ background }]);
    this.crateCardSvc.setCardBackground = background;
  }

  set setBackgroundSize(size: number) {
    this.crateCardSvc.setCardBackgroundSize = size;
  }
}
