import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesregistroComponent } from './opcionesregistro.component';

describe('OpcionesregistroComponent', () => {
  let component: OpcionesregistroComponent;
  let fixture: ComponentFixture<OpcionesregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
