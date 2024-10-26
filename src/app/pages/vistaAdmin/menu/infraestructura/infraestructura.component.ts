import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WelcomeComponent } from "../dashboard/welcome/welcome.component";

@Component({
  selector: 'app-infraestructura',
  standalone: true,
  imports: [RouterLink, WelcomeComponent],
  templateUrl: './infraestructura.component.html',
  styleUrl: './infraestructura.component.scss'
})
export class InfraestructuraComponent {

}
