import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarregistroComponent } from './agregarregistro.component';

describe('AgregarregistroComponent', () => {
  let component: AgregarregistroComponent;
  let fixture: ComponentFixture<AgregarregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
