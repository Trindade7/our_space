import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CreateCardComponent } from './create-card/create-card.component';
import { BackgroundPreviewComponent } from './create-card/customize-card/background-preview.component';
import { CustomizeCardComponent } from './create-card/customize-card/customize-card.component';
import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './creator.component';

@NgModule({
  declarations: [
    CreatorComponent,
    CreateCardComponent,
    CustomizeCardComponent,
    BackgroundPreviewComponent,
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
