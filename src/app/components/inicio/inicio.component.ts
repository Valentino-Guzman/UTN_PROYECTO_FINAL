import { Component } from '@angular/core';
import { LoginComponent } from "../../pages/login/login.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [LoginComponent, HeaderComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
