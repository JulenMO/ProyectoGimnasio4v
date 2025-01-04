import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMonitorComponent } from './popup-monitor.component';

describe('PopupMonitorComponent', () => {
  let component: PopupMonitorComponent;
  let fixture: ComponentFixture<PopupMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
