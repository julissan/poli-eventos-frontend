import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedirectivoComponent } from './homedirectivo.component';

describe('HomedirectivoComponent', () => {
  let component: HomedirectivoComponent;
  let fixture: ComponentFixture<HomedirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomedirectivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
