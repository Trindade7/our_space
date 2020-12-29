import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CoreModule } from './core/core.module';
import { NewCardComponent } from './new-card/new-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { ViewCardComponent } from './view-card/view-card.component';
import { ColorPickerComponent } from './new-card/color-picker/color-picker.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ViewCardComponent,
    PageNotFoundComponent,
    NewCardComponent,
    ColorPickerComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
