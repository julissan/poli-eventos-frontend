import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarubicacionComponent } from './editarubicacion.component';

describe('EditarubicacionComponent', () => {
  let component: EditarubicacionComponent;
  let fixture: ComponentFixture<EditarubicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarubicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
