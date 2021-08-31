import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerubicacionesComponent } from './verubicaciones.component';

describe('VerubicacionesComponent', () => {
  let component: VerubicacionesComponent;
  let fixture: ComponentFixture<VerubicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerubicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerubicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
