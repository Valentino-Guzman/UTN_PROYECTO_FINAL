import { Component } from '@angular/core';
import { ActivoService } from '../../../../services/activo.service';
import { Activo } from '../../../../interfaces/activo';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-activo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-activo.component.html',
  styleUrl: './crear-activo.component.scss'
})
export class CrearActivoComponent {
  
  activoData: Activo = {
    id: 0,
    nombre: '',
    ubicacion_id: 0
  }

  constructor(
    private activo: ActivoService,
    private toastr: ToastrService,
  ) {}

  crearActivo() {
    this.activo.crearActivo(this.activoData).subscribe({
      next: () => {
        this.toastr.success('Activo creado con éxito.')
      }
    })
     
  }
}
