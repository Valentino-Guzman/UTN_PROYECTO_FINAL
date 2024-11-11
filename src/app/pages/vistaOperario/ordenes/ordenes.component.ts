import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { OrdenDeTrabajoService } from '../../../services/orden-de-trabajo.service';
import { Orden } from '../../../interfaces/orden';
import { NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ordenes-operario',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.scss'
})

export class OrdenesComponentOperario implements OnInit {
  nombreOperario: string = '';
  ordenes: Orden[] = [];
  ordenId: Orden | undefined;

  tiempoInicio: { [key: number]: Date } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private ordenOperario: OrdenDeTrabajoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private ordenEstado: OrdenDeTrabajoService
  ) {}

  ngOnInit(): void {
    this.cargarOrdenes()

    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.obtenerOrdenPorId(id);
      }
    });
  }

  cargarOrdenes(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ordenOperario.obtenerOrdenOperario(id).subscribe({
      next: (data) => {
          this.ordenes = data;
        }
      },
    )}

    verOrden(ordenId: number): void {
      if (ordenId) {
        this.router.navigate(['menu/plantilla', ordenId]);
      } else {
        console.error('ID de orden no válido:', ordenId);
      }
    }

    obtenerOrdenPorId(id: number): void {
      this.ordenId = this.ordenes.find(orden => orden.id === id);
    }
    
    comenzar(ordenId: number) {
      const now = new Date();
      this.tiempoInicio[ordenId] = now; 
      this.ordenEstado.modificarEstadoOrdenes(ordenId, 'en_progreso').subscribe(response => {
        console.log('Orden en progreso', response);
        this.toastr.success('Comenzó el tiempo de la orden.')
      });
    }
  
    finalizar(ordenId: number) {
      const now = new Date();
      const tiempoInicio = this.tiempoInicio[ordenId];
      if (tiempoInicio) {
        const tiempoTranscurrido = Math.floor((now.getTime() - tiempoInicio.getTime()) / 60000);  // Tiempo en minutos
        console.log('Tiempo transcurrido:', tiempoTranscurrido);
        this.ordenEstado.modificarEstadoOrdenes(ordenId, 'completa', tiempoTranscurrido).subscribe(response => {
          console.log('Orden completada', response);
          this.toastr.success('Finalizó el tiempo de la orden.')
        });
      }
    }
}
