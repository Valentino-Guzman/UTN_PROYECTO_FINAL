import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Edificio } from '../../../../interfaces/edificio';

@Component({
  selector: 'app-edificio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edificio.component.html',
  styleUrl: './edificio.component.scss'
})
export class EdificioComponent {
  
  @Input() edificios: Edificio[] = [];
  @Output() edificioSeleccionado = new EventEmitter<number>();
  
  edificio(event:any) {
    this.edificioSeleccionado.emit(event.target.value);
  }
}
