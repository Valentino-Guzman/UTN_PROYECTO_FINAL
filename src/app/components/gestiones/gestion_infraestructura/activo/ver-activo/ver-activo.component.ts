import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivoService } from '../../../../../services/activo.service';
import { Activo } from '../../../../../interfaces/activo';
import { SvgBasuraComponent } from "../../../../svg/svg-basura/svg-basura.component";
import { SvgEditarComponent } from "../../../../svg/svg-editar/svg-editar.component";
import { RouterLink } from '@angular/router';
import { BtnAtrasComponent } from "../btn-atras/btn-atras.component";

@Component({
  selector: 'app-ver-activo',
  standalone: true,
  imports: [NgFor, SvgBasuraComponent, SvgEditarComponent, RouterLink, BtnAtrasComponent],
  templateUrl: './ver-activo.component.html',
  styleUrl: './ver-activo.component.scss'
})
export class VerActivoComponent implements OnInit {


  activos: Activo[] = []

  constructor(private activo: ActivoService) {}

  ngOnInit(): void {
      this.activo.obtenerActivos().subscribe(data => {
        this.activos = data
      })
  }

  eliminar() {
    
  }

  editar() {
   
  }
}
