import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NewBackgroundComponent } from './new-background/new-background.component';


@NgModule({
  declarations: [AdminComponent, NewBackgroundComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
