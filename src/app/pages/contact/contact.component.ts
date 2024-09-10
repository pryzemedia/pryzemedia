import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
//import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  user = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.post('http://pryzemedia.com/main/contact.php', this.user).subscribe(
      (response) => {
        console.log('Form successfully sent!', response);
      },
      (error) => {
        console.log('Error sending form', error);
      }
    );
    this.resetForm();
  }

  resetForm() {
    this.user = {
      name: '',
      email: '',
      message: ''
    };
  }
}
