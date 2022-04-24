import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDesktopComponent } from './page-desktop.component';

describe('PageDesktopComponent', () => {
  let component: PageDesktopComponent;
  let fixture: ComponentFixture<PageDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
