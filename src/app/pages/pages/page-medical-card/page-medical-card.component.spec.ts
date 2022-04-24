import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMedicalCardComponent } from './page-medical-card.component';

describe('PageMedicalCardComponent', () => {
  let component: PageMedicalCardComponent;
  let fixture: ComponentFixture<PageMedicalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMedicalCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMedicalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
