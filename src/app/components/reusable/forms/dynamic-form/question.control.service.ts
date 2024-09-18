import { Injectable } from '@angular/core';
import {Form, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

import {QuestionBase} from "./question-base";

//@Injectable({providedIn: 'root'})
@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) : FormGroup<any> {
    const group: any = {};

    if (!questions || questions.length == 0){
      return new FormGroup(group);
    }
    /*questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });*/
    /*questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.compose(question.validators))
        : new FormControl(question.value || '');
    });*/

    /*questions.forEach(question => {
      if(question.validators) console.log("question.validators = " + JSON.stringify(question.validators));
      group[question.key] = question.required ? new FormControl(question.value || '', question.validators)
        : new FormControl(question.value || '');
    });*/

    console.log("QuestionControlService toFormGroup");
    questions.forEach(question => {
      if (question.required) {
        group[question.key] = new FormControl(question.value || '',
          question.validators.length > 1 ? Validators.compose(question.validators) : question.validators[0]);
          //[Validators.required]);
      } else {
        group[question.key] = new FormControl(question.value || '');
      }

      // Log the form control to the console
      console.log(group[question.key]);
    });
    return new FormGroup(group);
  }


}
