import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerubicacionesporeventoComponent } from './verubicacionesporevento.component';

describe('VerubicacionesporeventoComponent', () => {
  let component: VerubicacionesporeventoComponent;
  let fixture: ComponentFixture<VerubicacionesporeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerubicacionesporeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerubicacionesporeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
