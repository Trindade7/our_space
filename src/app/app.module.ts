import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/auth';
import { USE_EMULATOR as USE_DATABASE_EMULATOR } from '@angular/fire/database';
import { USE_EMULATOR as USE_FIRESTORE_EMULATOR } from '@angular/fire/firestore';
import { USE_EMULATOR as USE_FUNCTIONS_EMULATOR } from '@angular/fire/functions';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '@app-envs/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { ViewCardComponent } from './cards/view-card/view-card.component';
import { CoreModule } from './core/core.module';
import { GreetingComponent } from './greeting/greeting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { MenuComponent } from './cards/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    ViewCardComponent,
    PageNotFoundComponent,
    GreetingComponent,
    SignInComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    // *#### STRART EMULATORS
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9099] : undefined,
    },
    {
      provide: USE_DATABASE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9000] : undefined,
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 8080] : undefined,
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 5001] : undefined,
    },
    // *#### END
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
