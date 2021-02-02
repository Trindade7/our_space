import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CreateCardService } from '../create-card.service';

@Component({
  selector: 'app-customize-card',
  templateUrl: './customize-card.component.html',
  styleUrls: ['./customize-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomizeCardComponent implements OnInit {
  customizingZone: 'background' | 'color' | 'font' = 'background';

  textColors: string[] = [
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

  constructor (public crateCardSvc: CreateCardService) { }

  ngOnInit(): void {
  }
}
