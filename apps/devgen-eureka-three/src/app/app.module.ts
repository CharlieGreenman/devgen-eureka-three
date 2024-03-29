import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@devgen-eureka-three/common/ui";
import { GlobalFooterModule } from "@devgen-eureka-three/common/ui";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
