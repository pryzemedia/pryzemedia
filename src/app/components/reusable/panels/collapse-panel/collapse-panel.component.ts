import {Component, Input, ViewChild, OnInit, AfterViewInit, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'collapse-panel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './collapse-panel.component.html',
  styleUrls: ['./collapse-panel.component.css']
})
export class CollapsePanelComponent implements OnInit, AfterViewInit{

  @Input() cardClass: string = '';
  @Input() headerClass: string = 'blue-header';
  @Input() collapseClass: string= '';
  @Input() expandID: string = 'collapseResources';
  @Input() matHeaderIcon: string = 'check_circle';
  @Input() headerLabel: string = 'Resources';
  @Input() toggleOn: boolean = true;
  @Input() disableToggle: boolean = false; //disable toggle message
  @Input() toggleMessage: string = 'No Command selected. Select a Command to continue.'
  @Input() containerClass: string = '';
  @Input() startCollapsed: boolean = false;
  @Input() public hideContent: boolean = true;

  @ViewChild('collapsePanel') collapsePanel: ElementRef;
  //public hideContent:boolean;


  showDefault: string = 'show';
  addCollapsed: string = '';

  bootstrap:any;

  public collapsed: boolean = false;

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
      //console.log("show has been detected: this.collapsed = "+ this.collapsed);
    });

    // Add event listener for 'hidden.bs.collapse' event
    collapseElement.addEventListener('hidden.bs.collapse', () => {
      this.collapsed = true;
      //console.log("hidden has been detected: this.collapsed = "+ this.collapsed);
    });
  }

  ngOnInit() {
    //this.hideContent = this.toggleOn;
    this.hideContent = this.toggleOn;

    //console.log("this.startCollapsed = " + this.startCollapsed);
    if (this.startCollapsed){
      this.showDefault = '';
      this.addCollapsed = 'collapsed';
      this.collapsed = true;
      //console.log("this.startedCollapsed == true, this.addCollapsed = " + this.addCollapsed);
    }

    //console.log("this.addCollapsed = " + this.addCollapsed);
  }


}
