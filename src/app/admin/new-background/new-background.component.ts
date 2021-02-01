import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CardBackgroungModel, CardModel, mockBackground, mockCard } from '@app-core/models/card.model';
import { CardComponent } from '@app-shared/card/card.component';

import { NewBackgroundService } from './new-background.service';

// TODO: COMPONENTALIZE

type SelectedControl = 'size' | 'position';
@Component({
  templateUrl: './new-background.component.html',
  styleUrls: ['./new-background.component.scss']
})
export class NewBackgroundComponent implements OnInit, AfterViewInit {
  @ViewChildren('previewCardRef') //TODO: change to Viewchild
  private cards!: QueryList<CardComponent>;
  private previewCardRef!: CardComponent;

  private _background: CardBackgroungModel = mockBackground();
  imageFile?: File;
  previewCard: CardModel = mockCard();
  showPreview!: any;
  isValidBackground = false;
  loading = false;

  selectedControl: SelectedControl = 'size';

  constructor (
    private _location: Location,
    private _newBackgroundSvc: NewBackgroundService
  ) { }

  ngOnInit(): void {
    this._background.color = '#fff';
  }

  ngAfterViewInit(): void {
    this.previewCardRef = this.cards.first;
  }

  goBack(): void {
    this._location.back();
  }

  submitBackground(): void {
    if (this.imageFile) {
      this.loading = true;
      this.background.size = this.background.size ?? 400;
      this._newBackgroundSvc.addBackground(this.background, this.imageFile)
        .then(res => alert('Background added'))
        .catch(err => alert(err))
        .finally(() => this.loading = false);
    } else {
      alert('No image');
    }
  }

  handleFileInput(event: Event) {
    this.isValidBackground = false; // In case user canscells input
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
    this.isValidBackground = true;
    this.imageFile = file;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this._background.imageUrl = reader.result?.toString() ?? '';
      console.log(this._background);
      this._updatePreview();
      return '';
    };
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
