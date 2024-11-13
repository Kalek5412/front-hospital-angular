import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
import { FormsModule } from '@angular/forms';
import { ModalImagenComponent } from './modal-imagen/modal-imagen.component';



@NgModule({
  declarations: [
    ContadorComponent,
    ModalImagenComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ContadorComponent,
    ModalImagenComponent
  ]
})
export class ComponentModule { }
