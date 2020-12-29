import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { GreetingComponent } from './greeting/greeting.component';
import { NewCardComponent } from './new-card/new-card.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewCardComponent } from './view-card/view-card.component';

const routes: Routes = [
  { path: 'hello', component: GreetingComponent },
  { path: 'cards/:id', component: ViewCardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'new-card', component: NewCardComponent },
  { path: '', pathMatch: 'full', redirectTo: '/hello' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // TODO: solve
}
