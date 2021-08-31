import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeorganizadorComponent } from './homeorganizador.component';

describe('HomeorganizadorComponent', () => {
  let component: HomeorganizadorComponent;
  let fixture: ComponentFixture<HomeorganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeorganizadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeorganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
