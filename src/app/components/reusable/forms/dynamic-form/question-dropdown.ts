import {QuestionBase} from './question-base';
import {FormGroup} from "@angular/forms";

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';

  constructor(options: {} = {}) {
    super(options);
    // other initializations...
  }


  override getAnswerText(): string | null {

    return null;
  }

  getSelectedOptionText(): string {

    return this.options[this.getAnswerId()].value;
  }

  /*
  updateDisabledStatus(questions: QuestionBase<string>[], selectedOption: string) {
    if (this.trigger) {
      // Find the option object for the selected option
      const selectedOptionObject = this.options.find(option => option.key === selectedOption);

      // Make sure the option object exists before comparing its value with the targetValue
      if (selectedOptionObject && selectedOptionObject.value === this.trigger.targetValue) {
        const targetQuestion = questions.find(question => question.key === this.trigger.targetQuestion);
        if (targetQuestion) {

          targetQuestion.disabled = false;
        }
      } else {
        const targetQuestion = questions.find(question => question.key === this.trigger.targetQuestion);
        if (targetQuestion) {
          targetQuestion.disabled = true;
        }
      }
    }
  }
*/


  updateDisabledStatus(form: FormGroup, selectedOption: string) {
    if (this.trigger) {
      // Find the option object for the selected option
      const selectedOptionObject = this.options.find(option => option.key.toString() === selectedOption);

      // Make sure the option object exists before comparing its value with the targetValue
      if (selectedOptionObject && selectedOptionObject.value === this.trigger.targetValue) {
        const targetControl = form.get(this.trigger.targetQuestion.toString());
        if (targetControl) {
          targetControl.enable();
        }
      } else {
        const targetControl = form.get(this.trigger.targetQuestion.toString());
        if (targetControl) {
          targetControl.disable();
          targetControl.reset();  // Reset the value of the control
        }
      }
    }
  }

  toggleRequiredStatus(form: FormGroup, selectedOption: string, questions: QuestionBase<any>[]) {
    //console.log("toggleRequiredStatus this.toggleRequired = " + JSON.stringify(this.toggleRequired));
    if (this.toggleRequired) {

      // Ensure that this.toggleRequired is an array
      const toggleRequiredArray = Array.isArray(this.toggleRequired) ? this.toggleRequired : [this.toggleRequired];

      toggleRequiredArray.forEach(x => {

        // Get the target question from the list of questions
        const targetQuestion = questions.find(q => q.key === x.targetQuestion);
        //console.log("targetQuestion = " + JSON.stringify(targetQuestion));
        if (targetQuestion) {
          // Get the control of the target question
          const targetControl = form.get(targetQuestion.key.toString());
          const selectedOptionObject = this.options.find(option => option.key.toString() === selectedOption);
          //console.log("selectedOption = " + selectedOption + ", this.toggleRequired.targetValue = " + x.targetValue);
         // console.log("selectedOptionObject = " + selectedOptionObject.value);
          //if (selectedOption === this.toggleRequired.targetValue) {
          if (selectedOptionObject.value === x.targetValue) {
            // If the value of the current control matches the target value,
            // set the validators of the target control to the validators of the source question
            targetControl.setValidators(targetQuestion.validators);
            targetQuestion.required = true;
          } else {
            // If the value of the current control does not match the target value,
            // clear the validators of the target control
            targetControl.clearValidators();
            targetQuestion.required = false;
          }

          // Update the validity status of the target control
          targetControl.updateValueAndValidity();
        }
      })
    }
  }
}
