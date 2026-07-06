import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  user = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: string | null = null;
  private readonly apiUrl = 'http://localhost/pryzemedia/contact.php';

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (!this.user.name.trim() || !this.user.email.trim() || !this.user.message.trim()) {
      this.submitStatus = 'Please complete all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = null;

    const payload = {
      name: this.user.name.trim(),
      email: this.user.email.trim(),
      message: this.user.message.trim()
    };

    this.http.post<{ success: boolean; message: string }>(this.apiUrl, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).subscribe({
      next: ({ success, message }) => {
        this.isSubmitting = false;
        this.submitStatus = message;

        if (success) {
          this.resetForm();
        }
      },
      error: () => {
        this.isSubmitting = false;
        this.submitStatus = 'Sorry, your message could not be sent right now. Please try again later.';
      }
    });
  }

  resetForm(): void {
    this.user = {
      name: '',
      email: '',
      message: ''
    };
  }
}
