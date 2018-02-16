import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanResultComponent } from './plan-result.component';

describe('PlanResultComponent', () => {
  let component: PlanResultComponent;
  let fixture: ComponentFixture<PlanResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
