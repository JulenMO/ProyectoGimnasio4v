import { TestBed } from '@angular/core/testing';

import { ServicioActividadesService } from './servicio-actividades.service';

describe('ServicioActividadesService', () => {
  let service: ServicioActividadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioActividadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
