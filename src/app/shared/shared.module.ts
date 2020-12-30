import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [CardComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
  CardComponent,
  LoadingSpinnerComponent]
})
export class SharedModule { }
