import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operario } from '../../../interfaces/operario';

@Component({
  selector: 'app-operarios',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './operarios.component.html',
  styleUrl: './operarios.component.scss'
})
export class OperariosComponent {

  @Input() operarios: Operario[] = [];
  @Output() operarioSeleccionado = new EventEmitter<number>

  operario(event:any) {
    this.operarioSeleccionado.emit(event.target.value);
  }
}
