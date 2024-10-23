import { Component } from '@angular/core';
import { Orden } from '../../../../interfaces/orden';
import { OrdenDeTrabajoService } from '../../../../services/orden-de-trabajo.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-vista-orden',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './vista-orden.component.html',
  styleUrl: './vista-orden.component.scss'
})
export class VistaOrdenComponent {
  
  
      
}
