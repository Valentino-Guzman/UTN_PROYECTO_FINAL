import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Activo } from '../../../../../interfaces/activo';
import { ActivoService } from '../../../../../services/activo.service';

@Component({
  selector: 'app-modificar-activo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modificar-activo.component.html',
  styleUrl: './modificar-activo.component.scss'
})
export class ModificarActivoComponent implements OnInit{

  datosActivo: Activo = {
    nombre: '',
    id: 0,
    siglas: ''
  }

  activos: Activo[] = []

  constructor (
    private activo: ActivoService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.activo.obtenerActivos().subscribe(data => {
        this.activos = data
      })
  }
  
  modificarActivo (){
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.activo.modificarActivo(this.datosActivo, id).subscribe(data =>{
      this.datosActivo=data

    })

  }
}
