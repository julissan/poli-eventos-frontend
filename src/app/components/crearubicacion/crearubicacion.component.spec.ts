import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearubicacionComponent } from './crearubicacion.component';

describe('CrearubicacionComponent', () => {
  let component: CrearubicacionComponent;
  let fixture: ComponentFixture<CrearubicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearubicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
