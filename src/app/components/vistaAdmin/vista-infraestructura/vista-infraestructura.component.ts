import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { EdificioComponent } from "../../svg/svg-edificio/edificio.component";

@Component({
  selector: 'app-vista-infraestructura',
  standalone: true,
  imports: [MatMenuModule, EdificioComponent],
  templateUrl: './vista-infraestructura.component.html',
  styleUrl: './vista-infraestructura.component.scss'
})
export class VistaInfraestructuraComponent {

}
