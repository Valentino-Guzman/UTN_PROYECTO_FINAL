import { Component } from '@angular/core';
import { OrdenDeTrabajoService } from '../../../services/orden-de-trabajo.service';
import { ActivatedRoute } from '@angular/router';
import { Orden } from '../../../interfaces/orden';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-plantilla',
  standalone: true,
  imports: [NgIf],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.scss'
})
export class PlantillaComponent {
  
  ordenes: Orden | undefined;

  constructor(
    private orden: OrdenDeTrabajoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.orden.obtenerOrdenId(id).subscribe(data => {
      this.ordenes = data;
    })
      
  }
  
  print() {
    window.print();
  }
}
