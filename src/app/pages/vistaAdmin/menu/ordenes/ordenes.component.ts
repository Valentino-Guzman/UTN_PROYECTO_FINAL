import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SvgOrdenComponent } from '../../../../components/svg/svg-orden/svg-orden.component';
import { SvgInfraestructuraComponent } from '../../../../components/svg/imagenes-menu/svg-infraestructura/svg-infraestructura.component';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [WelcomeComponent, SvgOrdenComponent, SvgInfraestructuraComponent, RouterLink],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.scss'
})
export class OrdenesComponent {

}
