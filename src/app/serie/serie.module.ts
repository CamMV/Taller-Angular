import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListarComponent } from './serie-listar/serie-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SerieListarComponent],
  exports: [ SerieListarComponent]
})
export class SerieModule { }
