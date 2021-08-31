import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcioneseventoComponent } from './opcionesevento.component';

describe('OpcioneseventoComponent', () => {
  let component: OpcioneseventoComponent;
  let fixture: ComponentFixture<OpcioneseventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcioneseventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcioneseventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
