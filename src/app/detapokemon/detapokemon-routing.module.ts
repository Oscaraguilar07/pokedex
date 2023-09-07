import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetapokemonPage } from './detapokemon.page';

const routes: Routes = [
  {
    path: '',
    component: DetapokemonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetapokemonPageRoutingModule {}
