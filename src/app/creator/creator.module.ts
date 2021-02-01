import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator.component';
import { ColorPickerComponent } from './new-card/color-picker/color-picker.component';
import { NewCardComponent } from './new-card/new-card.component';
import { CreateCardComponent } from './create-card/create-card.component';

@NgModule({
  declarations: [
    CreatorComponent,
    NewCardComponent,
    ColorPickerComponent,
    CreateCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

    CreatorRoutingModule
  ]
})
export class CreatorModule { }
