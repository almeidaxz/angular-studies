import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterChildComponent } from './emitter-child.component';

describe('EmitterChildComponent', () => {
  let component: EmitterChildComponent;
  let fixture: ComponentFixture<EmitterChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitterChildComponent]
    });
    fixture = TestBed.createComponent(EmitterChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
