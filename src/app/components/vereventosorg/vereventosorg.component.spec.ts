import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VereventosorgComponent } from './vereventosorg.component';

describe('VereventosorgComponent', () => {
  let component: VereventosorgComponent;
  let fixture: ComponentFixture<VereventosorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VereventosorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VereventosorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
