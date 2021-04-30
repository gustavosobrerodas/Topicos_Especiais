import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FogotPage } from './fogot.page';

const routes: Routes = [
  {
    path: '',
    component: FogotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FogotPageRoutingModule {}
