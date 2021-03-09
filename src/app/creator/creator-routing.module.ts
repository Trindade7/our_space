import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateCardComponent } from './create-card/create-card.component';
import { CreatorComponent } from './creator.component';

// import { NewCardComponent } from './new-card/new-card.component';

const routes: Routes = [
  // { path: 'new-card', component: NewCardComponent },
  { path: 'create-card', component: CreateCardComponent },
  { path: '', component: CreatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
