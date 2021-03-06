import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAtualizarPageRoutingModule } from './perfil-atualizar-routing.module';

import { PerfilAtualizarPage } from './perfil-atualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAtualizarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PerfilAtualizarPage]
})
export class PerfilAtualizarPageModule {}
