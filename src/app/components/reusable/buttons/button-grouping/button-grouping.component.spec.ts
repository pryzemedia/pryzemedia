import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupingComponent } from './button-grouping.component';

describe('ButtonGroupingComponent', () => {
  let component: ButtonGroupingComponent;
  let fixture: ComponentFixture<ButtonGroupingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonGroupingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonGroupingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
