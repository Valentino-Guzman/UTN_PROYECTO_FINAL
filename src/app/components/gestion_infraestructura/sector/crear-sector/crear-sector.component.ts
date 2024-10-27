import { Component } from '@angular/core';
import { SectorService } from '../../../../services/sector.service';
import { Sector } from '../../../../interfaces/sector';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

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