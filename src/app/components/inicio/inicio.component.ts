import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DescripcionComponent } from "./descripcion/descripcion.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, DescripcionComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  constructor(private router: Router) {}

  irAlLogin() {
    this.router.navigate(['/login']);
  }
}
