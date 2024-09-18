import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'tab-content',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent implements OnInit{

  @Input() cardID: string = '';//use the same cardId used in the tabList interface
  @Input() activeTab:boolean = false;
  @Input() iconColor: string = 'text-purple';
  @Input() icon:string = 'list';
  @Input() cardTitle:string = 'Active Inspection';
  @Input() cardDesc:string = 'Create, view, and update inspections.';

  tcClass:string = "";

  ngOnInit() {
    if (this.activeTab){
      this.tcClass = "show active";
    }
  }
}
