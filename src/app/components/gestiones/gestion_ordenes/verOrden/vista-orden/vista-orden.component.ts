import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Orden } from '../../../../../interfaces/orden';
import { OrdenDeTrabajoService } from '../../../../../services/orden-de-trabajo.service';

@Component({
  selector: 'app-vista-orden',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vista-orden.component.html',
  styleUrl: './vista-orden.component.scss'
})
export class VistaOrdenComponent {
  
  ordenes: Orden[] = [];
  
  constructor (
    private orden: OrdenDeTrabajoService
  ){}

  ngOnInit(): void {
    this.orden.obtenerOrden().subscribe(data => {
      this.ordenes = data;
    })
  }
}

