import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetapokemonPageRoutingModule } from './detapokemon-routing.module';

import { DetapokemonPage } from './detapokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetapokemonPageRoutingModule
  ],
  declarations: [DetapokemonPage]
})
export class DetapokemonPageModule {}
