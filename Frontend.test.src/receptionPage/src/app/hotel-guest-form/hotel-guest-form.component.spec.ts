import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelGuestFormComponent } from './hotel-guest-form.component';

describe('HotelGuestFormComponent', () => {
  let component: HotelGuestFormComponent;
  let fixture: ComponentFixture<HotelGuestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelGuestFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelGuestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
