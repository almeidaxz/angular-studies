import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderizacaoListasComponent } from './renderizacao-listas.component';

describe('RenderizacaoListasComponent', () => {
  let component: RenderizacaoListasComponent;
  let fixture: ComponentFixture<RenderizacaoListasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderizacaoListasComponent]
    });
    fixture = TestBed.createComponent(RenderizacaoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
