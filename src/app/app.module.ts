import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ColorPickerComponent } from './cards/new-card/color-picker/color-picker.component';
import { NewCardComponent } from './cards/new-card/new-card.component';
import { ViewCardComponent } from './cards/view-card/view-card.component';
import { CoreModule } from './core/core.module';
import { GreetingComponent } from './greeting/greeting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ViewCardComponent,
    PageNotFoundComponent,
    NewCardComponent,
    ColorPickerComponent,
    GreetingComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
