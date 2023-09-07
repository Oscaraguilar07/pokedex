import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalletipoPage } from './detalletipo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalletipoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalletipoPageRoutingModule {}
