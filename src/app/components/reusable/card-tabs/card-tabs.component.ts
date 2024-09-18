import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'card-tabs',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card-tabs.component.html',
  styleUrls: ['./card-tabs.component.css']
})
export class CardTabsComponent {

  @Input() cardID: string = 'unique_1'; // Must be unique
  tabId: string = this.cardID + '_tab';
  tabCId: string = this.cardID + '_tc';
  @Input() accentBgClass: string = "sms-lt-red-header";
  @Input() dynamicContent: any[] = []; //Nav tabs dynamic content

}
