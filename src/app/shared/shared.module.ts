import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterResortsByPipe } from './filter-resorts-by.pipe';



@NgModule({
  declarations: [
    FilterResortsByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterResortsByPipe
  ]
})
export class SharedModule { }
