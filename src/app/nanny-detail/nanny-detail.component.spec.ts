import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyDetailComponent } from './nanny-detail.component';

describe('NannyDetailComponent', () => {
  let component: NannyDetailComponent;
  let fixture: ComponentFixture<NannyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
