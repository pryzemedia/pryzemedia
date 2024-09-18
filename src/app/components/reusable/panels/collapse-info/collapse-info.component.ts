import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-collapse-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapse-info.component.html',
  styleUrls: ['./collapse-info.component.css']
})
export class CollapseInfoComponent {

  @Input() expandID: string = 'collapseResources';
  @Input() cardClass: string = 'b';
  @Input() containerClass: string = '';
  @Input() btnClass: string = 'btn btn-blue-fill ms-auto py-4';
  @Input() btnCollapseText: string = 'Edit';
  @Input() btnExpandedTxt: string = 'Hide';
  @Input() panelTitle: string;
  /*@Input() userID: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() phone1: string;
  @Input() phone2: string = "";*/
  @Input() details: string;
  @Input() startCollapsed: boolean = false;

  @ViewChild('collapsePanel') collapsePanel: ElementRef;

  showDefault: string = 'show';
  addCollapsed: string = '';

  bootstrap:any;

  public collapsed: boolean = false;

  hideUserInfo : boolean = false;
  hideUserInfoBtnCaption = this.btnExpandedTxt;

  details_txt: string = '';

  /*clickEdit(event : any) : void {
    this.hideUserInfo = !this.hideUserInfo;
    if(this.hideUserInfo){
      this.hideUserInfoBtnCaption = "Edit";
    } else {
      this.hideUserInfoBtnCaption = "Hide";
    }
    event.preventDefault();
  }*/

  public hideCollapse() {
    const collapseElement = this.collapsePanel.nativeElement;

    // Create a new Bootstrap Collapse instance
    // @ts-ignore
    const bsCollapse = new bootstrap.Collapse(collapseElement, {
      toggle: false // This option must be false
    });
    bsCollapse.hide();
  }

  public showCollapse () {
    const collapseElement = this.collapsePanel.nativeElement;
    // @ts-ignore
    const bsCollapse = new bootstrap.Collapse(collapseElement, {
      toggle: false // This option must be false
    });
    bsCollapse.show();
  }

  ngAfterViewInit() {
    // Get the nativeElement from the ElementRef
    const collapseElement = this.collapsePanel.nativeElement;

    // Add event listener for 'shown.bs.collapse' event
    collapseElement.addEventListener('shown.bs.collapse', () => {
      this.collapsed = false;
      this.hideUserInfoBtnCaption = this.btnExpandedTxt;
      this.details_txt = '';
      //console.log("show has been detected: this.collapsed = "+ this.collapsed);
    });

    // Add event listener for 'hidden.bs.collapse' event
    collapseElement.addEventListener('hidden.bs.collapse', () => {
      this.collapsed = true;
      this.hideUserInfoBtnCaption = this.btnCollapseText;
      this.details_txt = this.details;
      //console.log("hidden has been detected: this.collapsed = "+ this.collapsed);
    });
  }

  ngOnInit() {

    //console.log("this.startCollapsed = " + this.startCollapsed);
    if (this.startCollapsed){
      this.showDefault = '';
      this.addCollapsed = 'collapsed';
      this.collapsed = true;
      this.hideUserInfoBtnCaption = this.btnCollapseText;
      this.details_txt = this.details;
      //console.log("this.startedCollapsed == true, this.addCollapsed = " + this.addCollapsed);
    }

    //console.log("this.addCollapsed = " + this.addCollapsed);
  }

}
