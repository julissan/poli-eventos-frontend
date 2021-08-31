import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinvitadosComponent } from './verinvitados.component';

describe('VerinvitadosComponent', () => {
  let component: VerinvitadosComponent;
  let fixture: ComponentFixture<VerinvitadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinvitadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
