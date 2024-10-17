import { Component } from '@angular/core';
import { ubicacion } from '../../interfaces/ubicacion';
import { UbicacionService } from '../../services/ubicacion.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.scss'
})
export class UbicacionComponent {

  ubicacionData: ubicacion[] = [];
 

  constructor(
    private ubicacionService: UbicacionService,
  ) {}

  obtenerUbicaciones() {
    this.ubicacionService.obtenerUbicacion(this.ubicacionData).subscribe({
      next: (data) => {
        this.ubicacionData = data;
      }
    })
  }

}
