import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { SectorService } from '../../../../../services/sector.service';
import { Sector } from '../../../../../interfaces/sector';

@Component({
  selector: 'app-ver-sector',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ver-sector.component.html',
  styleUrl: './ver-sector.component.scss'
})
export class VerSectorComponent implements OnInit {
  sectores: Sector[] = []

  constructor (
    private sector:SectorService
  ){}

  ngOnInit(): void {
    this.sector.obtenerSector().subscribe(data => {
      this.sectores = data
    }) 
  }
}

