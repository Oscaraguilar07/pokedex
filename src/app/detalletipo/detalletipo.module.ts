import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalletipoPageRoutingModule } from './detalletipo-routing.module';

import { DetalletipoPage } from './detalletipo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalletipoPageRoutingModule
  ],
  declarations: [DetalletipoPage]
})
export class DetalletipoPageModule {}
