import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OrdenDeTrabajoService } from '../../services/orden-de-trabajo.service';
import { OperarioService } from '../../services/operario.service';
import { UbicacionService } from '../../services/ubicacion.service';
import { PisoService } from '../../services/piso.service';
import { ActivoService } from '../../services/activo.service';
import { EdificioService } from '../../services/edificio.service';

import { Orden } from '../../interfaces/orden';
import { Operario } from '../../interfaces/operario';
import { Ubicacion } from '../../interfaces/ubicacion';
import { Piso } from '../../interfaces/piso';
import { Activo } from '../../interfaces/activo';
import { Edificio } from '../../interfaces/edificio';
import { Tarea } from '../../interfaces/tarea';
import { TipoOtService } from '../../services/tipo-ot.service';
import { Tipo_ot } from '../../interfaces/tipo_ot';
import { EdificioComponent } from "./edificio/edificio.component";
import { PisoComponent } from "./piso/piso.component";
import { ActivoComponent } from "./activo/activo.component";
import { UbicacionComponent } from "./ubicacion/ubicacion.component";
import { OperariosComponent } from "./operarios/operarios.component";
import { ObservacionComponent } from "./observacion/observacion.component";
import { TipoOtComponent } from "./tipo-ot/tipo-ot.component";
import { Sector } from '../../interfaces/sector';
import { SectorService } from '../../services/sector.service';
import { SectorComponent } from "./sector/sector.component";


@Component({
  selector: 'app-orden-de-trabajo',
  standalone: true,
  imports: [FormsModule, CommonModule, EdificioComponent, PisoComponent, ActivoComponent, UbicacionComponent, OperariosComponent, ObservacionComponent, TipoOtComponent, SectorComponent],
  templateUrl: './orden-de-trabajo.component.html',
  styleUrl: './orden-de-trabajo.component.scss'
})
export class OrdenDeTrabajoComponent implements OnInit{

  nuevaOrden: Orden = {
    tipo_ot_id: 1,
    piso_id: 1,
    sector_id: 1,
    edificio_id: 1,
    codigo_unico: '',
    observacion: '',
    usuario_id: 1,
    activo_tarea_descrip_id: 1,
    fecha_creacion: new Date()
  }

  listaOrdenes: Orden[] = [];
  operarios: Operario[] = [];
  ubicaciones: Ubicacion[] = [];
  pisos: Piso[] = [];
  activos: Activo[] = [];
  sectores: Sector[] = [];
  edificios: Edificio[] = [];
  tarea_descrip: Tarea[] = [];
  tiposOt: Tipo_ot[] = [];
  observacion: string = '';
  codigo_unico: string = '';

  constructor(
    private orden: OrdenDeTrabajoService,
    private operario: OperarioService,
    private ubicacion: UbicacionService,
    private piso: PisoService,
    private activo: ActivoService,
    private edificio: EdificioService,
    private tipoOt: TipoOtService,
    private sector: SectorService
  ) {}

  ngOnInit(): void {
    this.operario.obtenerOperarios().subscribe(data => {
      this.operarios = data;
    });
    this.ubicacion.obtenerUbicacion().subscribe(data => {
      this.ubicaciones = data;
    });
    this.piso.obtenerPiso().subscribe(data => {
      this.pisos = data
    });
    this.activo.obtenerActivo().subscribe(data => {
      this.activos = data;
    });
    this.edificio.obtenerEdificio().subscribe(data => {
      this.edificios = data;
    });
    this.tipoOt.obtenerTipo_Orden().subscribe(data => {
      this.tiposOt = data;
    });
    this.sector.obtenerSector().subscribe(data => {
      this.sectores = data;
    });
  }

  crearOrdenDeTrabajo() {
    this.nuevaOrden.tipo_ot_id 
    this.nuevaOrden.piso_id 
    this.nuevaOrden.sector_id
    this.nuevaOrden.edificio_id
    this.nuevaOrden.codigo_unico
    this.nuevaOrden.observacion
    this.nuevaOrden.usuario_id
    this.nuevaOrden.activo_tarea_descrip_id

    this.orden.crearOrden(this.nuevaOrden).subscribe({
      next: () => {
        console.log('Orden creada');
      }
    })
  }

  obtenerOrdenes() {
    this.orden.obtenerOrden().subscribe(data => {
      this.listaOrdenes = data;
      console.log(data)
    })
  }

}
