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
  private readonly apiUrl = this.getApiUrl();

  constructor(private http: HttpClient) {}

  /**
   * Determine API endpoint based on environment
   * Local dev: http://localhost/pryzemedia/contact.php
   * Production: ./contact.php (relative path in same directory)
   */
  private getApiUrl(): string {
    if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
      // Local development
      return 'http://localhost/pryzemedia/contact.php';
    }
    // Production - contact.php is in the same directory as index.html (/main/)
    return './contact.php';
  }

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
