import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDocumentDetailComponent } from './page-document-detail.component';

describe('PageDocumentDetailComponent', () => {
  let component: PageDocumentDetailComponent;
  let fixture: ComponentFixture<PageDocumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDocumentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
