import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-observacion',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './observacion.component.html',
  styleUrl: './observacion.component.scss'
})
export class ObservacionComponent {

  @Input() observacion:string = ''

}
