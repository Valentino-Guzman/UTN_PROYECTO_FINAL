import { Component, OnInit } from '@angular/core';
import { PisoService } from '../../../../../services/piso.service';
import { Piso } from '../../../../../interfaces/piso';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ver-piso',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ver-piso.component.html',
  styleUrl: './ver-piso.component.scss'
})
export class VerPisoComponent implements OnInit {
  pisos: Piso [] = [];

  constructor (
    private piso: PisoService
  ){}

  ngOnInit(): void {
    this.piso.obtenerPiso().subscribe(data => {
      this.pisos = data
    }) 
  }
}
