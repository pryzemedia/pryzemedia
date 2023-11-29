import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WebComponent} from "./pages/web/web.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
    imports: [
        BrowserModule,
        HeaderComponent,
        BrowserAnimationsModule,
        WebComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
