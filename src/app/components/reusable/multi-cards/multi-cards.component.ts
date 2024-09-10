import {Component, Input, OnInit, ViewChild, SimpleChange} from '@angular/core';
import { CommonModule } from '@angular/common';
import {showcaseItem} from "../../data/general-interface";
import {ModalComponent} from "../modal/modal.component";
import {ModalService} from "../../../services/modal.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-multi-cards',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './multi-cards.component.html',
  styleUrls: ['./multi-cards.component.css']
})
export class MultiCardsComponent implements OnInit{

  @Input()
  cardList: showcaseItem[] = [];
  @Input()
  uID: string = "web";
  @Input()
  btnColorClass: string = "btn-secondary";
  @Input()
  headerColorClass: string = "bg-light";
  @Input()
  headerTextColor: string = "text-dark";
  @Input()
  textColorClass: string = "text-dark";
  @Input()
  videoModal:boolean = false;

  @ViewChild('vModalComponent')
  vModalComponent? : ModalComponent;

  modalTitle:string = "Video Player";

  /*@ViewChild('htmliFrameElement')
  iFrame? : any;*/

  public vSrc:SafeResourceUrl;

  blankSrc:SafeResourceUrl;

  //private element: any;

  /*constructor(public modalService: ModalService, public el: ElementRef) {
    this.element = el.nativeElement;
  }*/

  constructor(protected modalService: ModalService, private sanitizer: DomSanitizer) {
    this.vSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/tqhHxWlJxlg?si=66Q0hPGbBUM147YP'
    );
    this.blankSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      ''
    );
  }

  ngOnInit(){
    console.log("videoModal = "+ this.videoModal);
/*
    // add self (this modal instance) to the modal service, so it can be opened from any component
    if (this.vModalComponent) this.modalService.add(this.vModalComponent);

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close modal on background click
    this.element.addEventListener('click', (el: any) => {
      if (el.target.className === 'modal') {
        if (this.vModalComponent) this.vModalComponent.close();
        //this.close();
      }
    }); */
  }

  /*close() {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
    this.isOpen = false;
  }*/
  ngOnChanges(change: SimpleChange){
    if(this.vModalComponent){
      //this.vModalComponent.updateSrc()
      console.log("Change detected, vSrc = " + this.vSrc);
      //this.vModalComponent.updateSrc(this.vSrc);
    }
  }
  ngOnDestroy() {


  }

  stopVideo(){
    if(this.videoModal) this.vSrc = this.blankSrc;
  }

  public updateVideoSrc(_cItem:any ){
    /*
    //console.log("event Clicked " + event.attr.data-bs)
    if(_cItem.link){
      this.vSrc = _cItem.link?.toString();
    }
  */
    //this.vSrc =_cItem;
    if(_cItem.youtube) this.vSrc = _cItem.youtube;
    this.modalTitle = _cItem.heading;
  }

}
