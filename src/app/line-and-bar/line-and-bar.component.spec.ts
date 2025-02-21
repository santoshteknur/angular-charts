import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineAndBarComponent } from './line-and-bar.component';

describe('LineAndBarComponent', () => {
  let component: LineAndBarComponent;
  let fixture: ComponentFixture<LineAndBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineAndBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineAndBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
