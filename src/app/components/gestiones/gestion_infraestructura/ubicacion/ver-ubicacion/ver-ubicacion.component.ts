import { Component, OnInit } from '@angular/core';
import { Ubicacion } from '../../../../../interfaces/ubicacion';
import { UbicacionService } from '../../../../../services/ubicacion.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ver-ubicacion',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ver-ubicacion.component.html',
  styleUrl: './ver-ubicacion.component.scss'
})
export class VerUbicacionComponent implements OnInit {
  ubicaciones: Ubicacion [] = []

  constructor(
   private ubicacion: UbicacionService
  ){}
  
  ngOnInit(): void {
    this.ubicacion.obtenerUbicacion().subscribe(data => {
      this.ubicaciones = data
    }) 
  }
}
