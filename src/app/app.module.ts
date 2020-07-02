import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LorventhomeComponent } from './lorventhome/lorventhome.component';

@NgModule({
  declarations: [
    AppComponent,
    LorventhomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
