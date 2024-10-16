import { Component } from '@angular/core';
import { HeaderLogoComponent } from "./header-logo/header-logo.component";
import { NavegacionComponent } from "./navegacion/navegacion.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderLogoComponent, NavegacionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
