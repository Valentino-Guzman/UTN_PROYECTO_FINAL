import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { OrdenDeTrabajoService } from '../../../services/orden-de-trabajo.service';
import { GraficoOrden, OrdenResponse } from '../../../interfaces/orden'; // Importa la nueva interfaz

@Component({
  selector: 'app-grafico-ordenes',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './grafico-ordenes.component.html',
  styleUrls: ['./grafico-ordenes.component.scss']
})
export class GraficoOrdenesComponent implements OnInit {
  
  single: GraficoOrden[] = [];

  colors: Color = {
    domain: ['#3D5B99', '#A0B3C1', '#A6C8FF'],
    name: '#060640',
    selectable: false,
    group: ScaleType.Ordinal
  };

  constructor(private ordenEstado: OrdenDeTrabajoService) {}

  ngOnInit(): void {
    this.obtenerCantidades(); 
  }

  obtenerCantidades() {
    this.ordenEstado.obtenerEstadoOrdenes().subscribe((data: OrdenResponse) => {
      this.single = [
        { name: "Completadas", value: Number(data.completas) },
        { name: "En Progreso", value: Number(data.en_progreso) },
        { name: "Pendientes", value: Number(data.pendientes) }
      ];
    }); 
  }
}
