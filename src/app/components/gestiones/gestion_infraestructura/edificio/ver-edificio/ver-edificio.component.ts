import { Component, OnInit } from '@angular/core';

import { EdificioService } from '../../../../../services/edificio.service';
import { Edificio } from '../../../../../interfaces/edificio';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ver-edificio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ver-edificio.component.html',
  styleUrl: './ver-edificio.component.scss'
})
export class VerEdificioComponent implements OnInit {
  edificios: Edificio [] = []

  

  constructor(
    private edificio: EdificioService 
  ){}
  ngOnInit(): void {
    this.edificio.obtenerEdificio().subscribe(data => {
      this.edificios = data
    }) 
  }

}
