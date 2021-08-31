import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcioneventoComponent } from './inscripcionevento.component';

describe('InscripcioneventoComponent', () => {
  let component: InscripcioneventoComponent;
  let fixture: ComponentFixture<InscripcioneventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscripcioneventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcioneventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
