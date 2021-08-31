import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarubicacionComponent } from './agregarubicacion.component';

describe('AgregarubicacionComponent', () => {
  let component: AgregarubicacionComponent;
  let fixture: ComponentFixture<AgregarubicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarubicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
