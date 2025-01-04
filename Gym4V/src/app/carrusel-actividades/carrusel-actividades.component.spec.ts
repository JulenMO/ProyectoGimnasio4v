import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselActividadesComponent } from './carrusel-actividades.component';

describe('CarruselActividadesComponent', () => {
  let component: CarruselActividadesComponent;
  let fixture: ComponentFixture<CarruselActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarruselActividadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
