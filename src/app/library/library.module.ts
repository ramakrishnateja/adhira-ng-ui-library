import { VisibilityByValuePipe } from './../pipes/visibility-by-value.pipe';
import { SelectedItemsOnlyPipe } from './../pipes/selected-items-only.pipe';
import { BsRadioButtonsComponent } from './bs-radio-buttons/bs-radio-buttons.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BsRadioButtonsComponent,
    VisibilityByValuePipe,
    SelectedItemsOnlyPipe
  ],
  exports: [
    BsRadioButtonsComponent,
  ]
})
export class LibraryModule { }
