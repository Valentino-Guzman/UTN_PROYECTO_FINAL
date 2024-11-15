import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdenDeTrabajoService } from '../../../services/orden-de-trabajo.service';
import { ActivatedRoute } from '@angular/router';
import { Orden } from '../../../interfaces/orden';
import { NgFor, NgIf } from '@angular/common';
import { TiempoService } from '../../../services/tiempo.service';

@Component({
  selector: 'app-plantilla',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.scss']
})
export class PlantillaComponent implements OnInit {

  ordenes: Orden | undefined;
  fechaCreacion: string | undefined;
  descripcionDelActivo: string[] = [];

  tiempoTranscurrido: number = 0;

  constructor(
    private orden: OrdenDeTrabajoService,
    private route: ActivatedRoute,
    private tiempoService: TiempoService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.orden.obtenerOrdenId(id).subscribe(data => {
      this.ordenes = data;
      console.log(data);
      if (this.ordenes) {
        const date = new Date(this.ordenes.fecha_creacion);
        this.fechaCreacion = date.toLocaleString('es-AR', {
          timeZone: 'America/Argentina/Buenos_Aires',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
  
        this.descripcionDelActivo = (this.ordenes.descripciones ?? '').split('\n');
        
        if (this.ordenes.tiempo_transcurrido) {
          this.tiempoTranscurrido = Math.floor(this.ordenes.tiempo_transcurrido / (1000 * 60));
        }
      }
    });
  }
  
  print() {
    window.print();
  }
}
