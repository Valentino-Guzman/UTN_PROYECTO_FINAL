import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Orden } from '../../interfaces/orden';
import { operario } from '../../interfaces/operario';
import { OrdenDeTrabajoService } from '../../services/orden-de-trabajo.service';
import { OperarioService } from '../../services/operario.service';
import { UbicacionService } from '../../services/ubicacion.service';
import { ubicacion } from '../../interfaces/ubicacion';

@Component({
  selector: 'app-orden-de-trabajo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './orden-de-trabajo.component.html',
  styleUrl: './orden-de-trabajo.component.scss'
})
export class OrdenDeTrabajoComponent implements OnInit{

  ordenData: Orden = {
    tipo_ot_id: 0,
    piso_id: 0, 
    sector_id: 0, 
    edificio_id: 0, 
    codigo_unico: '', 
    observacion: '', 
    usuario_id: 0, 
    activo_tarea_descrip_id: 0, 
    fecha_creacion: new Date()
  }

  operarios: operario[] = [];
  ubicaciones: ubicacion[] = [];
  
  ngOnInit(): void {
    this.operario.obtenerOperarios(this.operarios).subscribe(data => {
      this.operarios = data;
    });
    this.ubicacion.obtenerUbicacion(this.ubicaciones).subscribe(data => {
      this.ubicaciones = data;
    });
  }

  constructor(
    private orden: OrdenDeTrabajoService,
    private operario: OperarioService,
    private ubicacion: UbicacionService
  ) {}

  crearOrdenDeTrabajo() {
    this.orden.crearOrden(this.ordenData).subscribe({
      next: (response) => {
        console.log('Orden creada con ID:', response);
      }
    })
  }

}
