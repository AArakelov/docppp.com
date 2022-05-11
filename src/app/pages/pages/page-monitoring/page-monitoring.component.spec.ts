import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMonitoringComponent } from './page-monitoring.component';

describe('PageMonitoringComponent', () => {
  let component: PageMonitoringComponent;
  let fixture: ComponentFixture<PageMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
