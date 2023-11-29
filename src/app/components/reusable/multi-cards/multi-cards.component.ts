import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {showcaseItem} from "../../data/general-interface";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-multi-cards',
  standalone: true,
  imports: [CommonModule, BrowserModule],
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.css']
})
export class MultiCardsComponent{

  @Input()
  cardList: showcaseItem[] = [];

}
