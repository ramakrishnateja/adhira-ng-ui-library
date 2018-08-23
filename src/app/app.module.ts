
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LibraryModule } from './library/library.module';
import { ReferenceDataService } from './services/referencedataservice.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryModule,
    HttpModule
  ],
  providers: [ReferenceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
