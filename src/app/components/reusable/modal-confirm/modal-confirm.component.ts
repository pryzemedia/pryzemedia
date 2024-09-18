import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'modal-confirm',
  standalone: true,
    imports: [CommonModule],
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent {

  @ViewChild('modal') private modalContent: TemplateRef<ModalConfirmComponent>
  private modalRef: NgbModalRef

  @Input()
  title : string = "Confirmation";

  @Input()
  showXButton : boolean = true;

  @Input()
  yesLabel : string = "Yes";

  @Input()
  noLabel : string = 'No';

  @Input()
  size : 'sm' | 'lg' | 'xl' = 'lg';
  constructor(private modalService: NgbModal) { }

  open() : NgbModalRef{
    this.modalRef = this.modalService.open(this.modalContent,{ariaLabelledBy: 'modal-basic-title',
      backdrop : 'static',
      size: !this.size ? 'lg' : this.size});
    console.log('modal reference');
    console.log(this.modalRef);
    return this.modalRef;
  }
  cancel() : void {
    this.modalRef.close('no');
  }

  save() : void {
    this.modalRef.close('yes');
  }
}
