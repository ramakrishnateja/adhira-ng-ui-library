import { BsRadioButtonsComponent } from './bs-radio-buttons/bs-radio-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BsRadioButtonsComponent
  ],
  exports: [
    BsRadioButtonsComponent,
  ]
})
export class LibraryModule { }
