import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpocComponent } from './searchpoc.component';

describe('SearchpocComponent', () => {
  let component: SearchpocComponent;
  let fixture: ComponentFixture<SearchpocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
