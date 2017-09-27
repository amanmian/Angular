import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";

@NgModule({
  declarations: [
    AppComponent,ChildComponent,TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
