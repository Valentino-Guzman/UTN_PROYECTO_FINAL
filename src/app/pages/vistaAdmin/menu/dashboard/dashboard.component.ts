import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

import { WelcomeComponent } from "../ordenes/welcome/welcome.component";
import { SvgOrdenComponent } from '../../../../components/svg/svg-orden/svg-orden.component';
import { SvgInfraestructuraComponent } from '../../../../components/svg/imagenes-menu/svg-infraestructura/svg-infraestructura.component';
import { GraficoOrdenesComponent } from "../../../../components/graficos/grafico-ordenes/grafico-ordenes.component";
import { CalendarioComponent } from "../../../../components/calendario/calendario.component";



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WelcomeComponent, SvgOrdenComponent, SvgInfraestructuraComponent, RouterLink, GraficoOrdenesComponent, CalendarioComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  
} 
