import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private readonly emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  user = {
    name: '',
    email: '',
    message: ''
  };

  fieldErrors: { name: string | null; email: string | null; message: string | null } = {
    name: null,
    email: null,
    message: null
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
    const sanitized = {
      name: this.sanitizeInput(this.user.name),
      email: this.sanitizeInput(this.user.email),
      message: this.sanitizeInput(this.user.message)
    };

    this.user = { ...sanitized };
    this.validateAllFields();

    if (this.hasFieldErrors()) {
      this.submitStatus = 'Please fix the highlighted fields and try again.';
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = null;

    const payload = {
      name: sanitized.name,
      email: sanitized.email,
      message: sanitized.message
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

    this.fieldErrors = {
      name: null,
      email: null,
      message: null
    };
  }

  sanitizeAndValidateField(field: 'name' | 'email' | 'message'): void {
    this.user[field] = this.sanitizeInput(this.user[field]);
    this.validateField(field);
  }

  private validateAllFields(): void {
    this.validateField('name');
    this.validateField('email');
    this.validateField('message');
  }

  private hasFieldErrors(): boolean {
    return Boolean(this.fieldErrors.name || this.fieldErrors.email || this.fieldErrors.message);
  }

  private validateField(field: 'name' | 'email' | 'message'): void {
    const value = this.user[field].trim();

    if (field === 'name') {
      this.fieldErrors.name = value.length < 2 ? 'Name must be at least 2 characters.' : null;
      return;
    }

    if (field === 'email') {
      if (!value) {
        this.fieldErrors.email = 'Email is required.';
        return;
      }

      this.fieldErrors.email = this.emailPattern.test(value)
        ? null
        : 'Email must include "@" and at least one "." after it.';
      return;
    }

    this.fieldErrors.message = value ? null : 'Message is required.';
  }

  private sanitizeInput(value: string): string {
    return value
      .replace(/<[^>]*>/g, '')
      .replace(/javascript\s*:/gi, '')
      .replace(/on\w+\s*=\s*/gi, '')
      .replace(/[<>]/g, '')
      .trim();
  }
}
