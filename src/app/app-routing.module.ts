import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { NewCardComponent } from './cards/new-card/new-card.component';
import { ViewCardComponent } from './cards/view-card/view-card.component';
import { AuthGuard } from './core/auth.guard';
import { GreetingComponent } from './greeting/greeting.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'hello', component: GreetingComponent, canActivate: [AuthGuard] },
  { path: 'cards/:id', component: ViewCardComponent, canActivate: [AuthGuard] },
  { path: 'cards', component: CardsComponent, canActivate: [AuthGuard] },
  { path: 'new-card', component: NewCardComponent, canActivate: [AuthGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'cards', canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
