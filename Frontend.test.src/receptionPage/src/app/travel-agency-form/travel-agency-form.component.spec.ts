import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAgencyFormComponent } from './travel-agency-form.component';

describe('TravelAgencyFormComponent', () => {
  let component: TravelAgencyFormComponent;
  let fixture: ComponentFixture<TravelAgencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelAgencyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAgencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
