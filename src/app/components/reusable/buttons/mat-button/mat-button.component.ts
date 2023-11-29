import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mat-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mat-button.component.html',
  styleUrls: ['./mat-button.component.css']
})
export class MatButtonComponent implements OnInit{


  @Input()
  btnId: string = "";

  @Input()
  buttonLabel: string = 'Open';

  @Input()
  btnClass: string = 'btn btn-primary';

  @Input()
  matIcon: string = "";

  @Input()
  btnHref: string = "";

  @Input()
  cls: string = 'me-2';

  //button actions
  @Output() btn1_Action: EventEmitter<any> = new EventEmitter<any>();

  emitBtn1Action(params: any){
    //creates an instance of this if more than one button is used
    this.btn1_Action.emit(params);

  }

  ngOnInit(){

  }
}
