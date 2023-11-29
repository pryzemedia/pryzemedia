import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {showcaseItem} from "../../data/general-interface";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, BrowserModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{


  @Input()
  carouselID: string = "";

  @Input()
  carouselList: showcaseItem[] = [];


  ngOnInit() {
  }
}
