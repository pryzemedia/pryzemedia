import { Injectable } from '@angular/core';
import {ModalComponent} from "../components/reusable/modal/modal.component";
import {SafeResourceUrl} from "@angular/platform-browser";
import {showcaseItem} from "../components/data/general-interface";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private modals: ModalComponent[] = [];

  add(modal: ModalComponent) {
    // ensure component has a unique id attribute
    if (!modal.mId || this.modals.find(x => x.mId === modal.mId)) {
      throw new Error('modal must have a unique id attribute');
    }

    // add modal to array of active modals
    this.modals.push(modal);
  }

  remove(modal: ModalComponent) {
    // remove modal from array of active modals
    this.modals = this.modals.filter(x => x !== modal);
  }

  open(id: string, item:showcaseItem) {
    // open modal specified by id
    const modal = this.modals.find(x => x.mId === id);

    console.log("Add Modal Clicked!!!" );

    if (!modal) {
      throw new Error(`modal '${id}' not found`);
    }
    if(item) modal.updateSrc(item);
    modal.open();
  }

  close() {
    // close the modal that is currently open
    const modal = this.modals.find(x => x.isOpen);
    modal?.close();
  }
}
