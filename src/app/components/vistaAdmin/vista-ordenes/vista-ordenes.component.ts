import { Component } from '@angular/core';
import { OrdenDeTrabajoComponent } from "../../gestion_ordenes/orden-de-trabajo/orden-contenedor/orden-de-trabajo.component";
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { SvgOrdenComponent } from "../../svg/svg-orden/svg-orden.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vista-ordenes',
  standalone: true,
  imports: [OrdenDeTrabajoComponent, MatMenuModule, NgIf, SvgOrdenComponent, RouterLink],
  templateUrl: './vista-ordenes.component.html',
  styleUrl: './vista-ordenes.component.scss'
})
export class VistaOrdenesComponent {

}
