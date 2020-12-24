import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './cards/cards.component';
import { ViewCardComponent } from './view-card/view-card.component';

const routes: Routes = [
  { path: 'cards/:id', component: ViewCardComponent },
  { path: 'cards', component: CardsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/cards' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // TODO: solve
}
