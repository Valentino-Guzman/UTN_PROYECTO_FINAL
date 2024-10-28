import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "../dashboard/dashboard.component";

import { authService } from '../../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service';
import { SvgDashboardComponent } from '../../../../components/svg/imagenes-menu/svg-dashboard/dashboard.component';
import { SvgOperariosComponent } from '../../../../components/svg/imagenes-menu/svg-operarios/operarios.component';
import { SvgConfiguracionComponent } from '../../../../components/svg/imagenes-menu/svg-configuracion/svg-configuracion.component';
import { SvgInfraestructuraComponent } from '../../../../components/svg/imagenes-menu/svg-infraestructura/svg-infraestructura.component';
import { SvgLlaveComponent } from '../../../../components/svg/imagenes-menu/svg-llave/svg-llave.component';
import { SvgOrdenComponent } from "../../../../components/svg/svg-orden/svg-orden.component";
import { SvgEdificioComponent } from '../../../../components/svg/imagenes-menu/svg-edificio/svg-edificio.component';



@Component({
  selector: 'app-menu-principal',
  standalone: true,
  imports: [RouterLink, RouterOutlet, DashboardComponent, SvgDashboardComponent, SvgOperariosComponent, SvgConfiguracionComponent, SvgInfraestructuraComponent, SvgLlaveComponent, SvgOrdenComponent, SvgEdificioComponent],
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.scss'
})
export class MenuPrincipalComponent {


  constructor(
    private auth:authService,
    private router: Router,
    private toastr: ToastrService,
    private cookie: CookieService
  ) {}
 
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
    this.toastr.success('Sesión cerrada con éxito');
  }
}
