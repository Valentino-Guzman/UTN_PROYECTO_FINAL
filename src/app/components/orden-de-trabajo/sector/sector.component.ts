import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sector } from '../../../interfaces/sector';

@Component({
  selector: 'app-sector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sector.component.html',
  styleUrl: './sector.component.scss'
})
export class SectorComponent {

  @Input() sectores: Sector[] = [];
  @Output() sectorSeleccionado = new EventEmitter<number>

  sector(event:any) {
    this.sectorSeleccionado.emit(event.target.value);
  }
}
