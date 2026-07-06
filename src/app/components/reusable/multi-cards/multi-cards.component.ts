import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { showcaseItem } from '../../data/general-interface';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-multi-cards',
    standalone: true,
    imports: [CommonModule, ModalComponent],
    templateUrl: './multi-cards.component.html',
    styleUrls: ['./multi-cards.component.css']
})
export class MultiCardsComponent {
  @Input() cardList: showcaseItem[] = [];
  @Input() uID: string = 'web';
  @Input() btnColorClass: string = 'btn-secondary';
  @Input() headerColorClass: string = 'bg-light';
  @Input() headerTextColor: string = 'text-dark';
  @Input() textColorClass: string = 'text-dark';

  selectedItem: showcaseItem | null = null;
  isModalOpen = false;

  openItem(cItem: showcaseItem) {
    this.selectedItem = cItem;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedItem = null;
  }
}
