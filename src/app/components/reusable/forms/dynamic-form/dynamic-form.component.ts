import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

import {DynamicFormQuestionComponent} from "./dynamic-form-question/dynamic-form-question.component";

import {QuestionBase} from "./question-base";
import {QuestionControlService} from "./question.control.service";
import {DropdownQuestion} from "./question-dropdown";
import {QuestionResponse} from "../../../services/datacall/dataCallModel";


@Component({
  selector: 'app-dynamic-form', standalone: true, imports: [CommonModule, DynamicFormQuestionComponent, ReactiveFormsModule], providers: [QuestionControlService], templateUrl: './dynamic-form.component.html'
})

// Programmer notes. This form component can be used in a Gorm Group by simply placing an instance of this
// Component within the Form Group tags in the HTML portion of the code where you will implement this component

/*export const FORM_TYPES = ['input', 'text', 'select', 'checkbox', 'radio'] as const;
 type FormType = (typeof FORM_TYPES)[number];*/

export class DynamicFormComponent implements OnChanges {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup = new FormGroup<any>({});
  //form!: FormGroup;
  payLoad = '';

  submitted: boolean = false;
  showErrors: boolean = false;

  constructor(private qcs: QuestionControlService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //console.log("OnChanges this.questions = " + JSON.stringify(this.questions));
    if (!this.questions || this.questions.length === 0){
      //console.error("No Questions " + this.questions)
      return
    }
    //this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
    this.form = this.qcs.toFormGroup(this.questions);
    //console.log("DynamicFormComponent OnInit");

    // Disable the target control if the trigger property is set
    this.questions.forEach(question => {

      let control: FormControl = this.getQuestionFormControl(question) as FormControl;

      if (question.disabled) {
        this.disableQuestion(question)
      }

      // Subscribe to value changes for each question with a trigger or a toggleRequired property
      if (control) {
        control.valueChanges.subscribe(selectedOption => {
          // Call the update method with the selected option.
          question.updateUserAnswer(selectedOption);

          if (question instanceof DropdownQuestion) {
            if (question.trigger) {
              question.updateDisabledStatus(this.form, selectedOption);
            }
            if (question.toggleRequired) {
              question.toggleRequiredStatus(this.form, selectedOption, this.questions);
            }
          }
        });
      }
    });

    // Set the required property to false and clear validators of the target question if the toggleRequired property is set
    /*this.questions.forEach(question => {
     if (question.toggleRequired) {
     const targetQuestion = this.questions.find(q => q.key === question.toggleRequired.targetQuestion);
     //console.log("targetQuestion = " + JSON.stringify(targetQuestion));
     if (targetQuestion) {
     targetQuestion.required = false;
     this.form.get(targetQuestion.key).clearValidators();
     this.form.get(targetQuestion.key).updateValueAndValidity();
     }
     }
     });*/
//

  }

  getQuestionFormControl(question: string | QuestionBase<any>): FormControl {

    if (question instanceof QuestionBase) {
      question = question.key.toString()
    }

    return this.form.get(question) as FormControl;
  }


  disableQuestion(item: QuestionBase<any> | FormControl) {

    if (item instanceof QuestionBase<any>) {
      item.required = false
      item = this.form.get(item.key.toString()) as FormControl
    }

    if (item instanceof FormControl) {
      item.reset();
      item.disable();
    }
  }

  resetQuestion(item: QuestionBase<any> | FormControl) {

    if (item instanceof QuestionBase<any>) {
      item = this.form.get(item.key.toString()) as FormControl
    }

    if (item instanceof FormControl) {
      item.reset();
    }
  }

  onSubmit():QuestionResponse[] | false {
    this.submitted = true;
    console.log("Onsubmit submitted = " + this.submitted + ", this.form.valid = " + this.form.valid);
    if (this.form.valid) {
      /*this.questions.forEach(question => {
        question.userAnswer = this.form.get(question.key.toString())?.value;
      });*/
      //console.log("questions = " + JSON.stringify(this.questions));
      this.payLoad = JSON.stringify(this.form.getRawValue());


      return this.questions.filter(q => q.userAnswer).map(question => {

        const response: QuestionResponse = {
          questionId: question.key,
          answerText: question.getAnswerText(),
          answerId: question.getAnswerId()
        }

        return response
      })
    }
    return false
  }

  isFormValid(): Boolean {
    return this.form.valid
  }

  validateForm(): Boolean {
    this.showErrors = true;
    return this.isFormValid()
  }

  disableAllQuestions() {
    this.questions.forEach(x => {
      this.disableQuestion(x)
    })
  }

  resetAllQuestions() {
    this.questions.forEach(x => {
      this.resetQuestion(x)
    })
  }

  resetDynamicForm() {
    this.submitted = false;
    this.showErrors = false;
    this.resetAllQuestions()
  }

}
