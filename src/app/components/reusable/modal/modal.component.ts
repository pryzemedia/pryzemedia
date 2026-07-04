import { Component, Inject, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { showcaseItem } from '../../data/general-interface';

@Component({
  selector: 'modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnDestroy {
  private _isOpen = false;

  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    this.updateBodyOverflow();
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  @Input() item: showcaseItem | null = null;
  @Output() closed = new EventEmitter<void>();

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
  }

  close(): void {
    this.closed.emit();
  }

  private updateBodyOverflow(): void {
    this.document.body.style.overflow = this._isOpen ? 'hidden' : '';
  }
}
