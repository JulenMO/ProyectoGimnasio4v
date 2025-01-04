import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadComponentComponent } from './actividad-component.component';

describe('ActividadComponentComponent', () => {
  let component: ActividadComponentComponent;
  let fixture: ComponentFixture<ActividadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
