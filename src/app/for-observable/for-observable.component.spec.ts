import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForObservableComponent } from './for-observable.component';

describe('ForObservableComponent', () => {
  let component: ForObservableComponent;
  let fixture: ComponentFixture<ForObservableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForObservableComponent]
    });
    fixture = TestBed.createComponent(ForObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
