import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselMonitoresComponent } from './carrusel-monitores.component';

describe('CarruselMonitoresComponent', () => {
  let component: CarruselMonitoresComponent;
  let fixture: ComponentFixture<CarruselMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselMonitoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
