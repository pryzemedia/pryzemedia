import { QuestionBase } from './question-base';

export class TelQuestion extends QuestionBase<string> {
  override controlType = 'tel';
}
