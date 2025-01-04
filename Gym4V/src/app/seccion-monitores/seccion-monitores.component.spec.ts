import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionMonitoresComponent } from './seccion-monitores.component';

describe('SeccionMonitoresComponent', () => {
  let component: SeccionMonitoresComponent;
  let fixture: ComponentFixture<SeccionMonitoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionMonitoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
