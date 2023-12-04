import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WebComponent} from "./pages/web/web.component";
import {VideoComponent} from "./pages/video/video.component";
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        HeaderComponent,
        BrowserAnimationsModule,
        WebComponent,
        VideoComponent,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
