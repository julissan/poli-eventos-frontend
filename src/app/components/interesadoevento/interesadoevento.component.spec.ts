import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteresadoeventoComponent } from './interesadoevento.component';

describe('InteresadoeventoComponent', () => {
  let component: InteresadoeventoComponent;
  let fixture: ComponentFixture<InteresadoeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteresadoeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteresadoeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
