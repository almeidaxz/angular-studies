import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasComponentComponent } from './diretivas-component.component';

describe('DiretivasComponentComponent', () => {
  let component: DiretivasComponentComponent;
  let fixture: ComponentFixture<DiretivasComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasComponentComponent]
    });
    fixture = TestBed.createComponent(DiretivasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
