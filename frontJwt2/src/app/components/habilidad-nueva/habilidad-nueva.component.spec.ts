import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadNuevaComponent } from './habilidad-nueva.component';

describe('HabilidadNuevaComponent', () => {
  let component: HabilidadNuevaComponent;
  let fixture: ComponentFixture<HabilidadNuevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadNuevaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
