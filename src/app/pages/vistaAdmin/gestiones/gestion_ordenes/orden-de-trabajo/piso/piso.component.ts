import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Piso } from '../../../../../../interfaces/piso';

@Component({
  selector: 'app-piso',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './piso.component.html',
  styleUrl: './piso.component.scss'
})
export class PisoComponent{
  
  @Input() pisos: Piso[] = [];
  @Output() pisoSeleccionado = new EventEmitter<number>();
  
  piso(event:any) {
    this.pisoSeleccionado.emit(event.target.value);
  }
}
