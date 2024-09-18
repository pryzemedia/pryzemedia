import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartPanelComponent } from './pie-chart-panel.component';

describe('PieChartPanelComponent', () => {
  let component: PieChartPanelComponent;
  let fixture: ComponentFixture<PieChartPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PieChartPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieChartPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
