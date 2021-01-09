import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CardModel, mockCard } from 'src/app/core/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() card: CardModel = mockCard();

  constructor (private _changeDetector: ChangeDetectorRef) { }

  reload(): void {
    console.log('\nIn card \n', this.card, '\n');
    // this.card = card;
    this._changeDetector.markForCheck();
  }

  ngOnInit(): void {
  }
}
