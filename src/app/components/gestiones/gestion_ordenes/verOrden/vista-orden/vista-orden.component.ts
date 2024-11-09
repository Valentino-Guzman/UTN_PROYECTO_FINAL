import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Orden } from '../../../../../interfaces/orden';
import { OrdenDeTrabajoService } from '../../../../../services/orden-de-trabajo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vista-orden',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vista-orden.component.html',
  styleUrls: ['./vista-orden.component.scss']
})
export class VistaOrdenComponent implements OnInit {

  ordenes: Orden[] = [];
  ordenId: Orden | undefined;
  fechaCreacion: string | undefined;
  descripcionDelActivo: string[] = [];

  constructor(
    private orden: OrdenDeTrabajoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtén las órdenes y formatea las fechas
    this.orden.obtenerOrden().subscribe(data => {
      console.log('Órdenes obtenidas:', data);
      this.ordenes = data;
      this.ordenes.forEach(orden => {
        const date = new Date(orden.fecha_creacion);
        orden.fecha_creacion_formateada = date.toLocaleString('es-AR', {
          timeZone: 'America/Argentina/Buenos_Aires',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      });
    });

    // Si el id de la orden está en la URL (por ejemplo para editar), captúralo
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.obtenerOrdenPorId(id);
      }
    });
  }

  obtenerOrdenPorId(id: number): void {
    // Busca la orden por su id
    this.ordenId = this.ordenes.find(orden => orden.id === id);
  }

  verOrden(ordenId: number): void {
    if (ordenId) {
      // Navega a la ruta con el id de la orden
      this.router.navigate(['/menu/plantilla', ordenId]);
    } else {
      console.error('ID de orden no válido:', ordenId);
    }
  }
}
