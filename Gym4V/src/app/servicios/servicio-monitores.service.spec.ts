import { TestBed } from '@angular/core/testing';

import { ServicioMonitoresService } from './servicio-monitores.service';

describe('ServicioMonitoresService', () => {
  let service: ServicioMonitoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMonitoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
