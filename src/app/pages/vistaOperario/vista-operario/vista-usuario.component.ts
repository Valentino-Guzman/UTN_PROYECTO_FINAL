import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { OrdenDeTrabajoService } from '../../../services/orden-de-trabajo.service';
import { Orden, OrdenTiempo } from '../../../interfaces/orden';
import { NgFor } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vista-usuario',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vista-usuario.component.html',
  styleUrl: './vista-usuario.component.scss'
})
export class VistaUsuarioComponent implements OnInit {
  nombreOperario: string = '';
  ordenes: Orden[] = [];
  ordenId: Orden | undefined;

  timers: { [key: number]: OrdenTiempo } = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private cookie: CookieService,
    private ordenOperario: OrdenDeTrabajoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private tiempo: OrdenDeTrabajoService
  ) {}

  ngOnInit(): void {
    this.obtenerOperario()
    this.cargarOrdenes()

    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.obtenerOrdenPorId(id);
      }
    });
  }
  obtenerOperario() {
    const operarioName = this.cookie.get('operario');
    this.nombreOperario = operarioName;
  }

  cargarOrdenes(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.ordenOperario.obtenerOrdenOperario(id).subscribe({
      next: (data) => {
          this.ordenes = data;
          console.log(data)
        }
      },
    )}

    verOrden(ordenId: number): void {
      if (ordenId) {
        this.router.navigate(['/plantilla', ordenId]);
      } else {
        console.error('ID de orden no válido:', ordenId);
      }
    }

    obtenerOrdenPorId(id: number): void {
      this.ordenId = this.ordenes.find(orden => orden.id === id);
    }

    comenzarContador(ordenId: number): void {
      if (!this.timers[ordenId]) {
        this.timers[ordenId] = { tiempoInicio: Date.now(), tiempoTranscurrido: 0, intervalId: null };
      }
      this.toastr.success('Comenzó el tiempo de la orden')
      this.timers[ordenId].intervalId = setInterval(() => {
        this.timers[ordenId].tiempoTranscurrido = (Date.now() - this.timers[ordenId].tiempoInicio) / 60000;
      }, 60000); 
    }
  
    // vista-usuario.component.ts
finalizarContador(ordenId: number): void {
  if (this.timers[ordenId]?.intervalId) {
    clearInterval(this.timers[ordenId].intervalId);
    this.toastr.success('Orden terminada');
    delete this.timers[ordenId];
  }
}

}