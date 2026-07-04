import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiCardsComponent} from "../../components/reusable/multi-cards/multi-cards.component";
import {showcaseItem} from "../../components/data/general-interface";
import { DESIGN_PORTFOLIO } from '../../components/data/design-portfolio';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [CommonModule, MultiCardsComponent],
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {

  designShowcase: showcaseItem[] = DESIGN_PORTFOLIO;

  ngOnInit(): void {}

}
