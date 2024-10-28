import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WelcomeComponent } from "../ordenes/welcome/welcome.component";
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-infraestructura',
  standalone: true,
  imports: [RouterLink, WelcomeComponent,MatMenuModule, NgIf],
  templateUrl: './infraestructura.component.html',
  styleUrl: './infraestructura.component.scss'
})
export class InfraestructuraComponent {
  
}
