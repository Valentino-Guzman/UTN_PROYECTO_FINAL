import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../../../../services/activo.service';
import { Activo } from '../../../../../../interfaces/activo';

import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ver-activo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ver-activo.component.html',
  styleUrl: './ver-activo.component.scss'
})
export class VerActivoComponent implements OnInit {

  activos: Activo[] = []

  constructor(private activo: ActivoService) {}

  ngOnInit(): void {
      this.activo.obtenerActivos().subscribe(data => {
        this.activos = data
      })
  }

}
