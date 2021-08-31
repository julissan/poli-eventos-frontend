import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitadoeventoComponent } from './invitadoevento.component';

describe('InvitadoeventoComponent', () => {
  let component: InvitadoeventoComponent;
  let fixture: ComponentFixture<InvitadoeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitadoeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitadoeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
