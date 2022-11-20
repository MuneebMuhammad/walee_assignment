import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllBmisComponent } from './show-all-bmis.component';

describe('ShowAllBmisComponent', () => {
  let component: ShowAllBmisComponent;
  let fixture: ComponentFixture<ShowAllBmisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllBmisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllBmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
