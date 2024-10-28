import { Component } from '@angular/core';
import { PisoService } from '../../../../../services/piso.service';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Piso } from '../../../../../interfaces/piso';


@Component({
  selector: 'app-crear-piso',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-piso.component.html',
  styleUrl: './crear-piso.component.scss'
})
export class CrearPisoComponent {


   PisoData: Piso = {
    id:0,
    numero: ''
   }

  constructor (
    private piso: PisoService,
    private toastr: ToastrService,
    private router: Router

  ){}

  crearPiso() {
    this.piso.crearPiso(this.PisoData).subscribe({
      next: () => {
        this.router.navigate(['/menu/ver-piso'])
        this.toastr.success('Piso creado con éxito.')
      }
    })
     
  }



}
