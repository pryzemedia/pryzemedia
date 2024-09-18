import { QuestionBase } from './question-base';

export class NumberQuestion extends QuestionBase<number> {
  override controlType = 'number';
}
