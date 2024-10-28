import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { ActivoService } from '../../../../../services/activo.service';
import { Activo } from '../../../../../interfaces/activo';
import { Router } from '@angular/router';
import { BtnAtrasComponent } from "../btn-atras/btn-atras.component";

@Component({
  selector: 'app-crear-activo',
  standalone: true,
  imports: [FormsModule, CommonModule, BtnAtrasComponent],
  templateUrl: './crear-activo.component.html',
  styleUrl: './crear-activo.component.scss'
})
export class CrearActivoComponent {
  
  activoData: Activo = {
    id: 0,
    nombre: '',
    siglas: ''
  }

  constructor(
    private activo: ActivoService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  crearActivo() {
    this.activo.crearActivo(this.activoData).subscribe({
      next: () => {
        this.router.navigate(['/menu/ver-activos'])
        this.toastr.success('Activo creado con éxito.')
      }
    })
     
  }
}
