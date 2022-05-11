import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDocumentsComponent } from './page-documents.component';

describe('PageDocumentsComponent', () => {
  let component: PageDocumentsComponent;
  let fixture: ComponentFixture<PageDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
