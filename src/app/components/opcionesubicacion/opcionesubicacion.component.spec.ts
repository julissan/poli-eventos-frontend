import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesubicacionComponent } from './opcionesubicacion.component';

describe('OpcionesubicacionComponent', () => {
  let component: OpcionesubicacionComponent;
  let fixture: ComponentFixture<OpcionesubicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesubicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesubicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
