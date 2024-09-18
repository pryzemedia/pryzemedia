import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {Button} from 'component-lib';


@Component({
  selector: 'app-button-grouping',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './button-grouping.component.html',
  styleUrls: ['./button-grouping.component.css']
})
export class ButtonGroupingComponent implements OnInit {

  @Input() buttonList: Button[] = []; // pass json data in the form of a buttonList
  @Output() btn_Action: EventEmitter<any> = new EventEmitter<any>();


  emitBtn1Action(params: any) {
    //creates an instance of this if more than one button is used
    this.btn_Action.emit(params);

  }



  ngOnInit() {

  }
}
