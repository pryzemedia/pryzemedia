import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WebComponent } from './pages/web/web.component';
import { VideoComponent } from './pages/video/video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WebComponent,
    VideoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PryzeMedia';
}
