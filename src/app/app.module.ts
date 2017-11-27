
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { LibraryModule } from './library/library.module';
import { SelectionItemComponent } from './models/selection-item/selection-item.component';
import { VisibilityByValuePipe } from './pipes/visibility-by-value.pipe';
import { SelectedItemsOnlyPipe } from './pipes/selected-items-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectionItemComponent,
    VisibilityByValuePipe,
    SelectedItemsOnlyPipe
  ],
  imports: [
    BrowserModule,
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
