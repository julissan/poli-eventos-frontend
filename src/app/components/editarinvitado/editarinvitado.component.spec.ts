import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarinvitadoComponent } from './editarinvitado.component';

describe('EditarinvitadoComponent', () => {
  let component: EditarinvitadoComponent;
  let fixture: ComponentFixture<EditarinvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarinvitadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
