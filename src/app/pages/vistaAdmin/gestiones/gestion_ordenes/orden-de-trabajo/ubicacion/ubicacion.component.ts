import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ubicacion } from '../../../../../../interfaces/ubicacion';



@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.scss'
})
export class UbicacionComponent {

 @Input() ubicaciones: Ubicacion[] = [];
 @Output() ubicacionSeleccionado = new EventEmitter<number>
 
 ubicacion(event:any) {
  this.ubicacionSeleccionado.emit(event.target.value);
}
}
