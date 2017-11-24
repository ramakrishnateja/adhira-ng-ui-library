import { SelectableItem } from './../models/selectable-item';
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
    SelectableItem
  ]
})
export class LibraryModule { }
