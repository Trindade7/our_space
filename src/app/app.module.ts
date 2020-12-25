import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ViewCardComponent } from './view-card/view-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewCardComponent } from './new-card/new-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ViewCardComponent,
    PageNotFoundComponent,
    NewCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
