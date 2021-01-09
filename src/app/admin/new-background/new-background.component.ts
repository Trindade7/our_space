import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CardBackgroungModel, CardModel, mockBackground, mockCard } from 'src/app/core/models/card.model';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  templateUrl: './new-background.component.html',
  styleUrls: ['./new-background.component.scss']
})
export class NewBackgroundComponent implements OnInit, AfterViewInit {
  // @ViewChild('previewCardRef')
  // @ViewChild('previewCardRef')
  // private previewCardRef!: CardComponent;
  @ViewChildren('previewCardRef')
  private cards!: QueryList<CardComponent>;

  private previewCardRef!: CardComponent;

  private _background: CardBackgroungModel = mockBackground();
  imageFile?: File;
  previewCard: CardModel = mockCard();
  showPreview!: any;
  isValidBackground = false;

  constructor (private _location: Location) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.cards);
    this.previewCardRef = this.cards.first;
    // // this._updatePreview = this.previewCardRef.reload;
    // this.cards.changes.subscribe((comps: QueryList<CardComponent>) => {
    //   console.log(comps);

    //   this.previewCardRef = comps.first;
    // });
    // this._updatePreview = this.previewCardRef.reload;
  }

  goBack(): void {
    this._location.back();
  }

  submitBackground(): void {
    return;
  }

  handleFileInput(event: Event) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    console.log({ file });

    if (file) {
      this.imageFileInput = file;
      this.showPreview = true;
    }
  }
  private _updatePreview() {
    this.previewCard.background = this.background;
    this.previewCardRef.reload();
  }

  get background(): CardBackgroungModel {
    return this._background;
  }

  set color(v: string) {
    console.log(v);

    this._background.color = v;
  }
  set imageFileInput(file: File) {
    this.imageFile = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this._background.imageUrl = reader.result?.toString() ?? '';
      console.log(this._background);
      this._updatePreview();
      return '';
    };
    reader.onloadend = () => this._updatePreview();
  }
  set size(v: number) {
    console.log(v);
    this._updatePreview();

    this._background.size = v;
  }
  set repeat(v: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y') {
    console.log(v);
    this._updatePreview();

    this._background.repeat = v;
  }
  set positionX(v: 'left' | 'center' | 'right') {
    console.log(v);
    this._updatePreview();

    this._background.positionX = v;
  }
  set positionY(v: 'top' | 'center' | 'bottom') {
    console.log(v);
    this._updatePreview();

    this._background.positionY = v;
  }
}
