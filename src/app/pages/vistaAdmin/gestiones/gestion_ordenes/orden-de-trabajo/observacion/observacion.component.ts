import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-observacion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './observacion.component.html',
  styleUrl: './observacion.component.scss'
})
export class ObservacionComponent {
  
  observacion: string = '';
  @Output() observacionSeleccionado = new EventEmitter<string>();

  observacionCambio(value:string) {
    this.observacionSeleccionado.emit(value);
  }

}
