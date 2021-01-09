import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { CardBackgroungModel, CardModel, mockBackground, mockCard } from '../core/models/card.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {
  @ViewChild('previewCard')
  private previewCard!: CardComponent;

  mockCard: CardModel = mockCard();
  newBackground: CreateBackground = new CreateBackground(mockBackground(), this.reloadPreviewCallback);
  isValidBackground = false;
  showPreview!: any;

  reloadPreviewCallback(): void {
    console.log('\n\ncalling reload\n', this.reloadPreviewCallback, '\n\n');
    return;
  }

  constructor (private _location: Location) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.reloadPreviewCallback = this.previewCard.reload;
    console.log('\n\n', this.reloadPreviewCallback, '\n\n');
    this.newBackground = new CreateBackground(mockBackground(), this.reloadPreviewCallback);
  }

  goBack(): void {
    this._location.back();
  }

  getCardPreview(): CardModel {
    this.mockCard.background = this.newBackground.background;
    return this.mockCard;
  }

  handleFileInput(event: Event) {
    const file = (event.target as HTMLInputElement).files?.item(0);
    console.log({ file });

    if (file) {
      this.newBackground.imageFileInput = file;
      this.showPreview = true;
    }
  }



  submitBackground(): void {
    return;
  }
}

class CreateBackground {
  constructor (
    private _background: CardBackgroungModel,
    public reloadPreviewCallbaclk: () => void = () => { },
    public imageFile?: File,
    public previewCard: CardModel = mockCard(),
  ) {
    console.log('\n\ncallback', this.reloadPreviewCallbaclk, '\n\n');

  }

  private _updatePreview() {
    this.previewCard.background = this._background;
    this.reloadPreviewCallbaclk();
  }

  public get background(): CardBackgroungModel {
    return this._background;
  }

  public set color(v: string) {
    console.log(v);

    this._background.color = v;
  }
  public set imageFileInput(file: File) {
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
  public set size(v: number) {
    console.log(v);
    this._updatePreview();

    this._background.size = v;
  }
  public set repeat(v: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y') {
    console.log(v);
    this._updatePreview();

    this._background.repeat = v;
  }
  public set positionX(v: 'left' | 'center' | 'right') {
    console.log(v);
    this._updatePreview();

    this._background.positionX = v;
  }
  public set positionY(v: 'top' | 'center' | 'bottom') {
    console.log(v);
    this._updatePreview();

    this._background.positionY = v;
  }
}