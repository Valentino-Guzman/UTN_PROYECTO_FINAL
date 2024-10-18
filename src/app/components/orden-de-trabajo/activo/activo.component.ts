import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activo } from '../../../interfaces/activo';

@Component({
  selector: 'app-activo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './activo.component.html',
  styleUrl: './activo.component.scss'
})
export class ActivoComponent {

  @Input() activos: Activo[] = [];
  @Output() activoSeleccionado = new EventEmitter<number>

  activo(event:any) {
    this.activoSeleccionado.emit(event.target.value);
  }
}
