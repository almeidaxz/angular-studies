import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwaybFormoduleComponent } from './twayb-formodule.component';

describe('TwaybFormoduleComponent', () => {
  let component: TwaybFormoduleComponent;
  let fixture: ComponentFixture<TwaybFormoduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwaybFormoduleComponent]
    });
    fixture = TestBed.createComponent(TwaybFormoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
