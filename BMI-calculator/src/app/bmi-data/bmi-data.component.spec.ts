import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiDataComponent } from './bmi-data.component';

describe('BmiDataComponent', () => {
  let component: BmiDataComponent;
  let fixture: ComponentFixture<BmiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
