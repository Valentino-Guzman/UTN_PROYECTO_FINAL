import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Orden } from '../../../../../interfaces/orden';
import { OrdenDeTrabajoService } from '../../../../../services/orden-de-trabajo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Piso } from '../../../../../interfaces/piso';
import { Sector } from '../../../../../interfaces/sector';
import { PisoService } from '../../../../../services/piso.service';
import { FormsModule } from '@angular/forms';
import { EdificioService } from '../../../../../services/edificio.service';
import { OperarioService } from '../../../../../services/operario.service';
import { Edificio } from '../../../../../interfaces/edificio';
import { ActivoService } from '../../../../../services/activo.service';
import { Activo } from '../../../../../interfaces/activo';
import { Operario } from '../../../../../interfaces/operario';

@Component({
  selector: 'app-vista-orden',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './vista-orden.component.html',
  styleUrls: ['./vista-orden.component.scss']
})
export class VistaOrdenComponent implements OnInit {

  ordenes: Orden[] = [];
  ordenId: Orden | undefined;
  fechaCreacion: string | undefined;
  descripcionDelActivo: string[] = [];
  ordenesFiltradas: Orden[] = [];

  filtros = {
    piso_id: null,
    edificio_id: null,
    numero_orden: null,
    nombre_activo: null,
    operario_id: null,
    fecha: null
  }
  
  pisos: Piso[] = [];
  edificios:Edificio[] = [];
  sectores: Sector[] = [];
  numero_orden: Orden[] = [];
  activos: Activo[] = [];
  operarios: Operario[] = [];

  constructor(
    private orden: OrdenDeTrabajoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private piso: PisoService,
    private edificio: EdificioService,
    private operario: OperarioService,
    private activo: ActivoService,
  ) {}

  ngOnInit(): void {
    this.obtenerOrdenes();
    this.cargarPisos();
    this.cargarEdificio();
    this.cargarActivos();
    this.cargarOperario();
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.obtenerOrdenPorId(id);
      }
    });
  }

  obtenerOrdenes(): void {
    this.orden.obtenerOrden().subscribe(data => {
      console.log('Órdenes obtenidas:', data);
      this.ordenes = data;
      this.ordenesFiltradas = data;
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
  }

  cargarPisos() {
    this.piso.obtenerPiso().subscribe(piso => {{
      this.pisos = piso
    }})
  }

  cargarEdificio() {
    this.edificio.obtenerEdificio().subscribe(edificio =>
      this.edificios = edificio
    );
  }
  
  cargarActivos() {
    this.activo.obtenerActivos().subscribe(activo => {
      this.activos = activo
    });
  }

  cargarOperario() {
    this.operario.obtenerOperarios().subscribe(operario => {
      this.operarios = operario;
    })
  }

  obtenerOrdenPorId(id: number): void {
    this.ordenId = this.ordenes.find(orden => orden.id === id);
  }

  verOrden(ordenId: number): void {
    if (ordenId) {
      this.router.navigate(['/menu/plantilla', ordenId]);
    } else {
      console.error('ID de orden no válido:', ordenId);
    }
  }

  filtrarOrdenes() {
    this.ordenesFiltradas = this.ordenes.filter(orden => {
      const pisoCoincide = this.filtros.piso_id ? orden.piso_id === this.filtros.piso_id : true;
      const edificioCoincide = this.filtros.edificio_id ? orden.edificio_id === this.filtros.edificio_id : true
      const numeroOrden = this.filtros.numero_orden ? orden.numero_de_orden === this.filtros.numero_orden : true
      const nombreActivo = this.filtros.nombre_activo ? orden.activo_nombre === this.filtros.nombre_activo : true
      const operario = this.filtros.operario_id ? orden.usuario_id === this.filtros.operario_id : true
      const fecha = this.filtros.fecha ? orden.fecha_creacion === this.filtros.fecha : true
      return pisoCoincide && edificioCoincide && numeroOrden && nombreActivo && operario && fecha;
    });
  }
}
