import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectbookmarkComponent } from './projectbookmark.component';

describe('ProjectbookmarkComponent', () => {
  let component: ProjectbookmarkComponent;
  let fixture: ComponentFixture<ProjectbookmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectbookmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectbookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
