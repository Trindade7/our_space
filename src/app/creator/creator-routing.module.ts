import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreatorComponent } from './creator.component';
import { NewCardComponent } from './new-card/new-card.component';

const routes: Routes = [
  { path: 'new-card', component: NewCardComponent },
  { path: '', component: CreatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
