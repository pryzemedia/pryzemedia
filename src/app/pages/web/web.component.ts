import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiCardsComponent} from "../../components/reusable/multi-cards/multi-cards.component";
import {showcaseItem} from "../../components/data/general-interface";
import { WEB_PORTFOLIO } from '../../components/data/web-portfolio';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CommonModule, MultiCardsComponent],
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit{

  webPortfolio: showcaseItem[] = WEB_PORTFOLIO;

  ngOnInit() :void{}
}
