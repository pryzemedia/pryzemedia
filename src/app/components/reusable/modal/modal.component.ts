import {Component, ElementRef, Input, OnDestroy, OnInit, AfterViewInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalService} from "../../../services/modal.service";
//import {SafeResourceUrl} from "@angular/platform-browser";
import {showcaseItem} from "../../data/general-interface";

declare var window: any;

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit, OnDestroy{

  @Input() mId: string = "replace";
  isOpen = false;
  private element: any;
  videoSrc: string = "";

  @Output() vLinkUpdate: EventEmitter<any> = new EventEmitter();

  @Output() modalClosed: EventEmitter<any> = new EventEmitter();

  modalWindow: any;

  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    // add self (this modal instance) to the modal service so it can be opened from any component
    this.modalService.add(this);

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    //document.body.appendChild(this.element);



    // close modal on background click
    /*this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'modal') {
        console.log("modal closed on background");
        this.close();
      }
    });*/
  }

  ngAfterViewInit(){
    let checkModalExists: any = document.getElementById(this.mId);

    if(checkModalExists){
      //console.log("Modal exists" + checkModalExists);
    }


    console.log("this.mId = + " + this.mId);
    this.modalWindow = new window.bootstrap.Modal(
      document.getElementById(this.mId)
    );
    //console.log("modal initialized");

  }

  ngOnDestroy() {
    // remove self from modal service
    this.modalService.remove(this);

    // remove modal element from html
    this.element.remove();
  }

  open() {
    //console.log("Modal Component Open");
    this.modalWindow.show();
   /* this.element.style.display = 'block';
    document.body.classList.add('modal-open');*/
    this.isOpen = true;
  }

  close() {
   /* this.element.style.display = 'none';
    document.body.classList.remove('modal-open');*/
    this.modalClosed.emit()
    this.modalWindow.hide();
    this.isOpen = false;
  }

  public updateSrc(cItem:showcaseItem):void{
    //this.videoSrc = _url;
    this.vLinkUpdate.emit(cItem);
  }
}
