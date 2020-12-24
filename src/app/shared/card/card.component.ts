import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CardModel, mockCard } from 'src/app/core/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() card: CardModel = mockCard();

  constructor () { }

  ngOnInit(): void {
  }
}
