import { QuestionBase } from './question-base';
import { AbstractControl, ValidatorFn } from '@angular/forms';

export function yearValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const value = control.value;
    const year = value ? parseInt(value.split('-')[0]) : null;
    const currentYear = new Date().getFullYear();
    const isValid = year && !isNaN(year) && year.toString().length === 4
      && year >= currentYear - 100 && year <= currentYear + 100;
    return isValid ? null : { 'invalidYear': { value: control.value } };
  };
}

export class DateQuestion extends QuestionBase<string> {
  override controlType = 'date';

  constructor(options: {
    // append the custom yearValidator to the date
  } = {}) {
    super(options);
    this.validators.push(yearValidator());
  }
}
