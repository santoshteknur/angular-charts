import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarChartComponent } from './vertical-bar-chart.component';

describe('VerticalBarChartComponent', () => {
  let component: VerticalBarChartComponent;
  let fixture: ComponentFixture<VerticalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalBarChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
