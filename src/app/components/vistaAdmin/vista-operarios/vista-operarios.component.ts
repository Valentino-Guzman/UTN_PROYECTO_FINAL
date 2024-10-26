import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { SvgOperadorComponent } from "../../svg/svg-operador/svg-operador.component";

@Component({
  selector: 'app-vista-operarios',
  standalone: true,
  imports: [MatMenuModule, SvgOperadorComponent],
  templateUrl: './vista-operarios.component.html',
  styleUrl: './vista-operarios.component.scss'
})
export class VistaOperariosComponent {

}
