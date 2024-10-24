import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgOrdenComponent } from "../../components/svg/svg-orden/svg-orden.component";
import {  MatMenuModule } from '@angular/material/menu';
import { OrdenDeTrabajoComponent } from "../../components/gestion_ordenes/orden-de-trabajo/orden-contenedor/orden-de-trabajo.component";
import { VistaOrdenesComponent } from "../../components/vistaAdmin/vista-ordenes/vista-ordenes.component";
import { VistaInfraestructuraComponent } from "../../components/vistaAdmin/vista-infraestructura/vista-infraestructura.component";
import { CookieService } from 'ngx-cookie-service';
import { VistaOperariosComponent } from "../../components/vistaAdmin/vista-operarios/vista-operarios.component";
import { SvgCampanaComponent } from "../../components/svg/svg-campana/svg-campana.component";
import { SvgHeaderComponent } from "../../components/svg/svg-header/svg-header.component";
import { SvgFooterComponent } from "../../components/svg/svg-footer/svg-footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, RouterLink, SvgOrdenComponent, MatMenuModule, OrdenDeTrabajoComponent, VistaOrdenesComponent, VistaInfraestructuraComponent, VistaOperariosComponent, SvgCampanaComponent, SvgHeaderComponent, SvgFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  nombreOperario: string = ''

  constructor(
    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.getCookie('operario');
  } 

  getCookie(name: string) {
    this.nombreOperario = this.cookie.get(name)
  }
}
