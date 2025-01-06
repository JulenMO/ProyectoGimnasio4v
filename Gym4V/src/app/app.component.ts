import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterNavegacionComponent } from "./footer-navegacion/footer-navegacion.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterNavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gym4V';
}
