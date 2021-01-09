import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NewBackgroundComponent } from './new-background/new-background.component';

const routes: Routes = [
  { path: 'new-background', component: NewBackgroundComponent },
  // { path: '', pathMatch: 'full', component: AdminComponent },
  { path: '', pathMatch: 'full', redirectTo: 'new-background', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
