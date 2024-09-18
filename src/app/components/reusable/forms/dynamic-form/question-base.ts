import { ValidatorFn } from '@angular/forms';

export class QuestionBase<T> {
  value: T|undefined;
  key: number;
  label: string;
  required: boolean;
  /**
   * This is 1 based to determining the order you want it to display
   */
  order: number;
  controlType: string;
  type: string;
  inCard: boolean;  // put individual question inside of Bootstrap Card
  splitView: boolean = false; //Set to true to split the label on the left and input on the right side.
  // Be sure to set parentDivClass to "form-row"
  parentDivClass: string;  //Parent Div classes to add to the div containing the input and labels
  // use 'form-row' to have each input on its own line
  disabled: boolean = false; //ability to set the disabled property of the input
  trigger: { targetQuestion: number, targetValue: string } | null = null; //Enter the key of a question that you want to target when this object triggers an event
   //Enter the value of this question that you want to use to trigger an event
  toggleRequired: { targetQuestion: number, targetValue: string }[] | null = null; //Toggle an answer to be required when an answer has been selected
  options: {key: number, value: string, color?: string}[];  //Color option for radio buttons
  validators: ValidatorFn[];
  userAnswer: T|undefined; //Store the User's answer when submitting a form

  constructor(options: {
    value?: T;
    key?: number;
    label?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    inCard?: boolean;
    splitView?: boolean;
    parentDivClass?: string;
    disabled?: boolean,
    trigger?: { targetQuestion: number, targetValue: string },
    toggleRequired?: { targetQuestion: number, targetValue: string }[],
    options?: {key: number, value: string, color?: string}[];
    validators?: ValidatorFn[];
    userAnswer?: T;
  } = {}) {
    this.value = options.value;
    this.key = options.key || null;
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.inCard = !!options.inCard;
    this.splitView = !!options.splitView;
    this.parentDivClass = options.parentDivClass || '';
    this.disabled = options.disabled;
    this.trigger = options.trigger || null;
    this.toggleRequired = options.toggleRequired || null;
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.userAnswer = options.userAnswer;
  }

  updateUserAnswer(selectedOption: T) {
    //console.log("update called = " + JSON.stringify(selectedOption));
    this.userAnswer = selectedOption;
  }


  getAnswerId(): number | null {
    return (isNaN(+this?.userAnswer) ? null : +this?.userAnswer)
  }

  getAnswerText(): string | null {
    return (this?.userAnswer + "");
  }
}
