import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

import { WelcomeComponent } from "./welcome/welcome.component";
import { SvgOrdenComponent } from '../../../../components/svg/svg-orden/svg-orden.component';
import { SvgInfraestructuraComponent } from '../../../../components/svg/imagenes-menu/svg-infraestructura/svg-infraestructura.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WelcomeComponent, SvgOrdenComponent, SvgInfraestructuraComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  
} 
