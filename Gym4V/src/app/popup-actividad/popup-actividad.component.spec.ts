import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupActividadComponent } from './popup-actividad.component';

describe('PopupActividadComponent', () => {
  let component: PopupActividadComponent;
  let fixture: ComponentFixture<PopupActividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupActividadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
