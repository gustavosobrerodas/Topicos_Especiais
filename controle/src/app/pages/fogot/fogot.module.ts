import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FogotPageRoutingModule } from './fogot-routing.module';

import { FogotPage } from './fogot.page';
import { ComponentModule } from 'src/app/component/component.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentModule,
    FogotPageRoutingModule
  ],
  declarations: [FogotPage]
})
export class FogotPageModule {}
