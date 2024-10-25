import { Component } from '@angular/core';
import { OrdenDeTrabajoService } from '../../../services/orden-de-trabajo.service';
import { ActivatedRoute } from '@angular/router';
import { Orden } from '../../../interfaces/orden';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-plantilla',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss'
})
export class PlantillaComponent {
  
  ordenes: Orden | undefined;
  fechaCreacion: string | undefined;
  descripcionDelActivo: string[] = [];

  constructor(
    private orden: OrdenDeTrabajoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.orden.obtenerOrdenId(id).subscribe(data => {
      this.ordenes = data;
      console.log(data)
      if (this.ordenes) {
        const date = new Date(this.ordenes.fecha_creacion);
        this.fechaCreacion = date.toLocaleString('es-ES', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
  
        this.descripcionDelActivo = (this.ordenes.descripciones ?? '').split('\n');
      }
    });
  }

  print() {
    window.print();
  }
}
