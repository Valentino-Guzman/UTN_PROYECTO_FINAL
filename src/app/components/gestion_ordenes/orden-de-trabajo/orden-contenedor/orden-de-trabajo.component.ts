  import { Component, OnInit } from '@angular/core';
  import { FormsModule} from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { Router } from '@angular/router';

  import { OrdenDeTrabajoService } from '../../../../services/orden-de-trabajo.service';
  import { OperarioService } from '../../../../services/operario.service';
  import { UbicacionService } from '../../../../services/ubicacion.service';
  import { PisoService } from '../../../../services/piso.service';
  import { ActivoService } from '../../../../services/activo.service';
  import { EdificioService } from '../../../../services/edificio.service';
  import { SectorService } from '../../../../services/sector.service';
  import { TipoOtService } from '../../../../services/tipo-ot.service';
  import { TareaService } from '../../../../services/tarea_descrip.service';

  import { Orden } from '../../../../interfaces/orden';
  import { Operario } from '../../../../interfaces/operario';
  import { Ubicacion } from '../../../../interfaces/ubicacion';
  import { Piso } from '../../../../interfaces/piso';
  import { Edificio } from '../../../../interfaces/edificio';
  import { Tarea } from '../../../../interfaces/tarea';
  import { Sector } from '../../../../interfaces/sector';
  import { activo_desc } from '../../../../interfaces/activo_tarea_descrip';
  import { Tipo_ot } from '../../../../interfaces/tipo_ot';

  import { EdificioComponent } from "../edificio/edificio.component";
  import { PisoComponent } from "../piso/piso.component";
  import { ActivoComponent } from "../activo/activo.component";
  import { UbicacionComponent } from "../ubicacion/ubicacion.component";
  import { OperariosComponent } from "../operarios/operarios.component";
  import { ObservacionComponent } from "../observacion/observacion.component";
  import { TipoOtComponent } from "../tipo-ot/tipo-ot.component";
  import { SectorComponent } from "../sector/sector.component";

  import { ToastrService } from 'ngx-toastr';

  @Component({
    selector: 'app-orden-de-trabajo',
    standalone: true,
    imports: [FormsModule, CommonModule, EdificioComponent, PisoComponent, ActivoComponent, UbicacionComponent, OperariosComponent, ObservacionComponent, TipoOtComponent, SectorComponent],
    templateUrl: './orden-de-trabajo.component.html',
    styleUrl: './orden-de-trabajo.component.scss'
  })
  export class OrdenDeTrabajoComponent implements OnInit{

    nuevaOrden: Orden = {
      id: 0,
      tipo_ot_id: 0,
      piso_id: 0,
      sector_id: 0,
      edificio_id: 0,
      codigo_concatenado: '',
      observacion: '',
      usuario_id: 0,
      activo_tarea_descrip_id: 0,
      fecha_creacion: new Date(),
      numero_de_orden: '',
      ubicacion_id: 0
    }

    edificioSelecionado:number = 0;
    ubicacionSeleccionado: number = 0;
    operarioSeleccionado: number = 0; 
    pisoSeleccionado: number = 0;
    tipoOtSeleccionado: number = 0;
    sectorSeleccionado: number = 0;
    activo_tarea_descripSeleccionado: number = 0;

    listaOrdenes: Orden[] = [];
    operarios: Operario[] = [];
    ubicaciones: Ubicacion[] = [];
    pisos: Piso[] = [];
    activos: activo_desc[] = [];
    sectores: Sector[] = [];
    edificios: Edificio[] = [];
    tarea_descrip: Tarea[] = [];
    tiposOt: Tipo_ot[] = [];
    observacion: string = '';
    codigo_unico: string = '';
    numero_de_orden: string = '';

    constructor(
      private toastr: ToastrService,
      private router: Router,
      private orden: OrdenDeTrabajoService,
      private operario: OperarioService,
      private ubicacion: UbicacionService,
      private piso: PisoService,
      private activo: ActivoService,
      private edificio: EdificioService,
      private tipoOt: TipoOtService,
      private sector: SectorService,
      private tarea_desc: TareaService
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
      this.tarea_desc.obtenerTarea_descrip().subscribe(data => {
        this.tarea_descrip = data;
      })
    }

    crearOrdenDeTrabajo() {
      this.nuevaOrden.tipo_ot_id = this.tipoOtSeleccionado
      this.nuevaOrden.piso_id = this.pisoSeleccionado
      this.nuevaOrden.sector_id = this.sectorSeleccionado
      this.nuevaOrden.edificio_id = this.edificioSelecionado 
      this.nuevaOrden.codigo_concatenado = this.codigo_unico;
      this.nuevaOrden.observacion = this.observacion;
      this.nuevaOrden.usuario_id = this.operarioSeleccionado;
      this.nuevaOrden.activo_tarea_descrip_id = this.activo_tarea_descripSeleccionado;
      this.nuevaOrden.fecha_creacion = new Date();
      this.nuevaOrden.numero_de_orden = this.numero_de_orden;
      this.nuevaOrden.ubicacion_id = this.ubicacionSeleccionado;

      this.orden.crearOrden(this.nuevaOrden).subscribe({
        next: (response) => {
          this.toastr.success('Orden creada con éxito');
          this.router.navigate(['/plantilla', response.id]);
        },
        error: (err) => {
          this.toastr.error('Error al crear la orden');
          console.error(err);
        } 
      })
    }
  }
