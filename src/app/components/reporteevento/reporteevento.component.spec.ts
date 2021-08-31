import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteeventoComponent } from './reporteevento.component';

describe('ReporteeventoComponent', () => {
  let component: ReporteeventoComponent;
  let fixture: ComponentFixture<ReporteeventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteeventoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
