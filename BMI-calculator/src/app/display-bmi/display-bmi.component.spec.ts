import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBmiComponent } from './display-bmi.component';

describe('DisplayBmiComponent', () => {
  let component: DisplayBmiComponent;
  let fixture: ComponentFixture<DisplayBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
