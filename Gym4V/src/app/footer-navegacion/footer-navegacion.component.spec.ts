import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavegacionComponent } from './footer-navegacion.component';

describe('FooterNavegacionComponent', () => {
  let component: FooterNavegacionComponent;
  let fixture: ComponentFixture<FooterNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterNavegacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
