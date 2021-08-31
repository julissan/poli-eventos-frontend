import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerinvitadosporeventoComponent } from './verinvitadosporevento.component';

describe('VerinvitadosporeventoComponent', () => {
  let component: VerinvitadosporeventoComponent;
  let fixture: ComponentFixture<VerinvitadosporeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerinvitadosporeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerinvitadosporeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
