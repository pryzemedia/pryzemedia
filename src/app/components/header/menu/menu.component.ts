import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonComponent} from "../../reusable/buttons/mat-button/mat-button.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatButtonComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

}
