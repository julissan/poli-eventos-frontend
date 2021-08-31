import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearinvitadoComponent } from './crearinvitado.component';

describe('CrearinvitadoComponent', () => {
  let component: CrearinvitadoComponent;
  let fixture: ComponentFixture<CrearinvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearinvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearinvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
