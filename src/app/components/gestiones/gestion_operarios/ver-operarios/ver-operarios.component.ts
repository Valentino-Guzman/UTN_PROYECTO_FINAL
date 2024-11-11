import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperarioService } from '../../../../services/operario.service';
import { Operario } from '../../../../interfaces/operario';
import { NgFor, NgForOf } from '@angular/common';
import { SvgEditarComponent } from "../../../svg/svg-editar/svg-editar.component";
import { SvgBasuraComponent } from "../../../svg/svg-basura/svg-basura.component";

@Component({
  selector: 'app-ver-operario',
  standalone: true,
  imports: [NgFor, SvgEditarComponent, SvgBasuraComponent],
  templateUrl: './ver-operarios.component.html',
  styleUrl: './ver-operarios.component.scss'
})
export class VerOperarioComponent implements OnInit {
eliminar() {
throw new Error('Method not implemented.');
}
editar() {
throw new Error('Method not implemented.');
}
  operarios:Operario[] = [];

  constructor(
    private router: Router,
    private operario: OperarioService
  ) {}

  ngOnInit(): void {
    this.operario.obtenerOperarios().subscribe(operario => {
      this.operarios = operario
    })
  }

  regresar() {
    this.router.navigate(['menu/operarios']); 
  }
}
