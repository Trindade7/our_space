import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardBackgroungModel } from '@app-core/models/card.model';

@Component({
  selector: 'app-background-preview',
  template: `
  <style>
    .background{
      width: 100%;
      height: 100%;
      max-width: 100px;
      max-height: 100px;
      min-width: 75px;
      min-height: 75px;
      border: 1px solid lightgrey;
      background-size: cover;
      cursor:pointer;
      transition: box-shadow 200ms ease-in;
    }
    .background:hover,
    .background:focus{
      box-shadow: 4px 4px;
    }
  </style>

<div *ngIf="background.imageUrl.length; else colorTemplate" class="background"
     (click)="setBackground()"
     [ngStyle]="{
       'background-color': background.color,
       'background-image': 'url(' + background.imageUrl + ')'
      }">
</div>
<ng-template  #colorTemplate>
  <div class="background"
      (click)="setBackground()"
      [ngStyle]="{
        'background-color': background.color,
        'background-image': 'url(' + background.imageUrl + ')'
        }">
  </div>
</ng-template>

`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundPreviewComponent implements OnInit {
  @Input() background!: CardBackgroungModel;
  @Output() setBackgroundEmitter = new EventEmitter<CardBackgroungModel>();

  constructor () { }

  ngOnInit(): void {
    const bck = this.background;
    console.log({ bck });
  }

  setBackground() {
    // logger.collapsed('[background-preview.component] set', [this.background]);

    this.setBackgroundEmitter.emit(this.background);
  }
}
