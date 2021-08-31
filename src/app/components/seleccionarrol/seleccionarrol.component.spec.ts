import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarrolComponent } from './seleccionarrol.component';

describe('SeleccionarrolComponent', () => {
  let component: SeleccionarrolComponent;
  let fixture: ComponentFixture<SeleccionarrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
