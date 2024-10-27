import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Sector } from '../../../../../interfaces/sector';
import { SectorService } from '../../../../../services/sector.service';


@Component({
  selector: 'app-crear-sector',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-sector.component.html',
  styleUrl: './crear-sector.component.scss'
})
export class CrearSectorComponent {
  
   SectorData: Sector = {
    id: 0,
    nombre: ''
    
   }

  constructor (
    private sector: SectorService,
    private toastr: ToastrService

  ){}
  crearSector() {
    this.sector.crearSector(this.SectorData).subscribe({
      next: () => {
        this.toastr.success('Sector creado con éxito.')
      }
})
  }
}