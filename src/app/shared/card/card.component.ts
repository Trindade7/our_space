import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Logger as logger } from '@app-core/helpers/logger';
import { CardModel, mockCard } from '@app-core/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() card: CardModel = mockCard();

  constructor (private _changeDetector: ChangeDetectorRef) { }
  ngOnInit() { }

  reload(): void {
    logger.collapsed('[card.component] reload bck', [this.card]);
    this._changeDetector.markForCheck();
  }

}
