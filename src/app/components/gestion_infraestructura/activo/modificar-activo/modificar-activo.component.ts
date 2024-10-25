import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../../services/activo.service';
import { Activo } from '../../../../interfaces/activo';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    ubicacion_id: 0,
    id: 0
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
