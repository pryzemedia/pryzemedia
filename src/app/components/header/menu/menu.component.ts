import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonComponent} from "../../reusable/buttons/mat-button/mat-button.component";

declare var bootstrap: any;

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, MatButtonComponent],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Reinitialize Bootstrap scroll spy to detect the contact button
    const scrollSpy = document.querySelector('[data-bs-spy="scroll"]');
    if (scrollSpy) {
      const scrollSpyInstance = bootstrap.ScrollSpy.getOrCreateInstance(scrollSpy);
      scrollSpyInstance.refresh();
    }
  }

}
