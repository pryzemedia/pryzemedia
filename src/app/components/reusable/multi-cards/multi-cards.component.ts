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

  hasVideo:boolean = this.videoModal;
  modalTitle:string = "Video Player";

  modalDesc1:string = "Modal Description.";
  modalDesc2:string = "";
  modalDesc3:string = "";

  modalImgSrc:string = "";
  modalImgAlt:string = "";
  mLink1:string = "";
  mLink1Text:string = "";
  mLink2:string = "";
  mLink2Text:string = "";

  //Modal Body Bg color
  mBodyBG:string = "";

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
    //console.log("Change detected,");
    if(this.vModalComponent){
      //this.vModalComponent.updateSrc()
      console.log("Change detected, vSrc = " + this.vSrc);
      //this.vModalComponent.updateSrc(this.vSrc);
    }
  }
  ngOnDestroy() {


  }

  stopVideo(){
    if(this.hasVideo) this.vSrc = this.blankSrc;
  }

  public updateVideoSrc(_cItem:any ){
    /*
    //console.log("event Clicked " + event.attr.data-bs)
    if(_cItem.link){
      this.vSrc = _cItem.link?.toString();
    }
  */
    //this.vSrc =_cItem;

    //this.videoModal = _cItem.youtube ? true : false;
    //console.log("this.videoModal = " + this.videoModal);
    //console.log("_cItem.link2 = " + _cItem.link2);

    this.hasVideo = _cItem.isVideo ? true : false;

    if(this.hasVideo){
      if(_cItem.youtube) this.vSrc = _cItem.youtube;
      this.mBodyBG = " bg-dark";
    }else{
      this.mBodyBG = "";
      this.modalImgSrc = _cItem.imgSrc;
      this.modalImgAlt = _cItem.imgAlt;
      if(_cItem.link) {
        this.mLink1 = _cItem.link;
        this.mLink1Text = _cItem.linkText;
      }
      if(_cItem.link2) {
        this.mLink2 = _cItem.link2;
        this.mLink2Text = _cItem.link2Text;
      }else{
        this.mLink2 = "";
      }
    }

    this.modalTitle = _cItem.heading;
    this.modalDesc1 = _cItem.desc;
    this.modalDesc2 = _cItem.desc2;
    if(_cItem.desc3){
      this.modalDesc3 = _cItem.desc3;
    } else{
      this.modalDesc3 = "";
    }

  }

}
