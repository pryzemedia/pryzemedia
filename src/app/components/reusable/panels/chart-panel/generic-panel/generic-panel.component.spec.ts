import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPanelComponent } from './generic-panel.component';

describe('GenericPanelComponent', () => {
  let component: GenericPanelComponent;
  let fixture: ComponentFixture<GenericPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ GenericPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
