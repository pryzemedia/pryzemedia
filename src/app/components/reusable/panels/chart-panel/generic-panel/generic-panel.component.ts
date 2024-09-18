import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown, faFileExcel, faFilePdf, faFileWord, faList } from '@fortawesome/free-solid-svg-icons';
import {reportList} from "../../../../../../../assessment/src/app/components/collapse-panels/data/panel-options-interface";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-generic-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, HttpClientModule, MatIconModule],
  templateUrl: './generic-panel.component.html',
  styleUrls: ['./generic-panel.component.css']
})
export class GenericPanelComponent implements OnInit{

  //faList = faList;
  //faChevronDown = faChevronDown;
  faFileWord = faFileWord;
  faFileExcel = faFileExcel;
  faFilePdf = faFilePdf;


  @Input() headerText: string = "List of Reports"; //Text that goes in the header
  @Input() colorTheme:string = "blue"; //red, lt-red, blue, green, purple, dark
  @Input() cardID: string = ""; // Must be unique
  @Input() typeOfContent: string = "list"; // list, graph, table, gauge
  @Input() dynamicContent: any[] = []; // pass json data

  @Input() buttons: boolean = false; // does this component use buttons
  @Input() buttonList: any[] = []; // pass json data
  @Input() matIcon: string = "list"
  @Input() instructionTxt: string = "";

  //button actions
  @Output() btn1_Action: EventEmitter<any> = new EventEmitter<any>();
  @Output() btn2_Action: EventEmitter<any> = new EventEmitter<any>();

  headerClass: string = "blue-header";
  //iconHeader: string = "";
  reportMsgID: string = "";
  reportDataID: string = "";

  @Input()
  public hideContent: boolean = true;

  constructor (private httpService: HttpClient) { }


  emitBtn1Action(params: any){
    //creates an instance of this if more than one button is used
    this.btn1_Action.emit(params);

  }


  ngOnInit(){
    switch (this.colorTheme){
      case "purple":
        this.headerClass= "lt-purple-header";
        break;
      case "green" :
        this.headerClass = "green-header";
        break;
      case "dark" :
        this.headerClass = "dark-header";
        break;
      case "red" :
        this.headerClass = "red-header";
        break;
      case "lt-red" :
        this.headerClass = "lt-red-header";
        break;
      default:
        this.headerClass = "blue-header";
        break;
    }

    this.reportMsgID = this.cardID + 'Msg';
    this.reportDataID = this.cardID + 'Data';

  }

}
