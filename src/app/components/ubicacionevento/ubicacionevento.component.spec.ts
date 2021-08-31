import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacioneventoComponent } from './ubicacionevento.component';

describe('UbicacioneventoComponent', () => {
  let component: UbicacioneventoComponent;
  let fixture: ComponentFixture<UbicacioneventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacioneventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacioneventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
