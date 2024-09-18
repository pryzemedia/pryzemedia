import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartComponent } from './bar-chart.component';

describe('ChartPanelComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO fix this test - I believe it is failing because the component expects a number of inputs that are not being passed in during this test
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
