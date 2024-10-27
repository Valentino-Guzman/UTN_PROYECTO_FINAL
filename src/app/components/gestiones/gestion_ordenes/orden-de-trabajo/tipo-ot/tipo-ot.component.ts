import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tipo_ot } from '../../../../../interfaces/tipo_ot';


@Component({
  selector: 'app-tipo-ot',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tipo-ot.component.html',
  styleUrl: './tipo-ot.component.scss'
})
export class TipoOtComponent {
  @Input() tiposOt: Tipo_ot[] = [];
  @Output() tipoOtSeleccionado = new EventEmitter<number>

  tipoOt(event:any) {
    this.tipoOtSeleccionado.emit(event.target.value);
  }
}
