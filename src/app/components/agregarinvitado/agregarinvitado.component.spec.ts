import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarinvitadoComponent } from './agregarinvitado.component';

describe('AgregarinvitadoComponent', () => {
  let component: AgregarinvitadoComponent;
  let fixture: ComponentFixture<AgregarinvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarinvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarinvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
