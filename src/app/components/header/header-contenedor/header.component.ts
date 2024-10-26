import { Component } from '@angular/core';
import { HeaderLogoComponent } from "../header-logo/header-logo.component";
import { SvgUtnComponent } from "../../svg/svg-utn/svg-utn.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderLogoComponent, SvgUtnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
