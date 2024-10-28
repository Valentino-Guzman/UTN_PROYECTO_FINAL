import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-grafico-ordenes',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './grafico-ordenes.component.html',
  styleUrl: './grafico-ordenes.component.scss'
})
export class GraficoOrdenesComponent {
  single = [
    {
      "name": "Completadas",
      "value": 10
    },
    {
      "name": "En progreso",
      "value": 5
    },
    {
      "name": "Pendientes",
      "value": 3
    }
  ];

  colors: Color = {
    domain: ['#3D5B99', '#A0B3C1', '#A6C8FF'],
    name: '#060640',
    selectable: false,
    group: ScaleType.Ordinal
  };
  
}
