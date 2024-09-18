import { Component, Input, OnInit } from '@angular/core';
import {AbstractControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';

import {QuestionBase} from "../question-base";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent implements OnInit{

  @Input() question!: QuestionBase<string>;
  //@Input() form!: FormGroup;
  @Input() form: FormGroup;
  @Input() submitted: boolean;
  @Input() showErrors: boolean;

  //determine if the label needs to be next to the input
  labelClass: string = ""; // used for split view
  inputClass: string = ""; // used based on type of input

  //if (question.splitView) labelClass = this.question.splitView ? 'col-md-8' : '';

  get isValid(){
    const control = this.form.controls[this.question.key];
    // Return true if the control is disabled or if it's valid
    return control.disabled || control.valid;

  }

  getErrorMessage(control: AbstractControl) {
    const errorMessages = [];
    console.log("question.key = " + this.question.key + "control.errors = " + JSON.stringify(control.errors));
    if (control.errors) {
      if (control.errors['required']) {
        errorMessages.push('This field is required');
      }
      if (control.errors['minlength']) {
        errorMessages.push(`Minimum length is ${control.errors['minlength'].requiredLength}`);
      }
      if (control.errors['maxLength']) {
        errorMessages.push(`Maximum length is ${control.errors['maxLength'].requiredLength}`);
      }
      if (control.errors['pattern']) {
        errorMessages.push('Incorrect format');
      }
      if (control.errors['email']) {
        errorMessages.push('Please enter a valid email address');
      }
      if (control.errors['invalidYear']) {
        errorMessages.push('Invalid year. The chosen year has to be within 100 years of today\'s date.');
      }
    }
    return errorMessages;
  }

  ngOnInit() {
    if (this.question.splitView){
      this.labelClass = this.question.splitView ? 'col-md-8' : '';
    }

    if (this.question.controlType === 'radio') {
      this.inputClass = "btn-group d-flex justify-content-center";
    }
  }


}
