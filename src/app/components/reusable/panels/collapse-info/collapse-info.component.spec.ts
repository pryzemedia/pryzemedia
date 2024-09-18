import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseInfoComponent } from './collapse-info.component';

describe('CollapseInfoComponent', () => {
  let component: CollapseInfoComponent;
  let fixture: ComponentFixture<CollapseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CollapseInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
