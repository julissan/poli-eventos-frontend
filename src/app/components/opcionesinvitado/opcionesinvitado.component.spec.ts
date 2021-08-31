import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesinvitadoComponent } from './opcionesinvitado.component';

describe('OpcionesinvitadoComponent', () => {
  let component: OpcionesinvitadoComponent;
  let fixture: ComponentFixture<OpcionesinvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesinvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesinvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
