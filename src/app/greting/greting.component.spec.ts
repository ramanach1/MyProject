import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GretingComponent } from './greting.component';

describe('GretingComponent', () => {
  let component: GretingComponent;
  let fixture: ComponentFixture<GretingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GretingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GretingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
