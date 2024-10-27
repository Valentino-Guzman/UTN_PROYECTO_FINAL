import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { activo_desc } from '../../../../../interfaces/activo_tarea_descrip';




@Component({
  selector: 'app-activo',
  standalone: true,
  imports: [FormsModule, CommonModule, NgIf],
  templateUrl: './activo.component.html',
  styleUrl: './activo.component.scss'
})
export class ActivoComponent {

  @Input() activos: activo_desc[] = [];
  descripcionDelActivo: string[] = [];
  descripcion: string = ''
  
  @Output() activoSeleccionado = new EventEmitter<number>

  activo(event:any) {
    this.descripcion = this.activos.find(a => a.id === +event.target.value)?.descripciones || '',
    this.descripcionDelActivo = this.descripcion.split('\n');
    this.activoSeleccionado.emit(+event.target.value);
  }

}
