import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsearchComponent } from './atsearch.component';

describe('AtsearchComponent', () => {
  let component: AtsearchComponent;
  let fixture: ComponentFixture<AtsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
