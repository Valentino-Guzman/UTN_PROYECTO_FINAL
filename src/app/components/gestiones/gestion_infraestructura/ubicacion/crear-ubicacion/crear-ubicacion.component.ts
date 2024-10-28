import { Component } from '@angular/core';
import { UbicacionService } from '../../../../../services/ubicacion.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Ubicacion } from '../../../../../interfaces/ubicacion';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-ubicacion',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-ubicacion.component.html',
  styleUrl: './crear-ubicacion.component.scss'
})
export class CrearUbicacionComponent {

  UbicacionData: Ubicacion ={
    id: 0,
    ubicacion: ''
    

  }

constructor(
  private ubicacion: UbicacionService,
  private toastr: ToastrService,
  private router: Router
){}
crearUbicacion() {
   this.ubicacion.crearUbicacion(this.UbicacionData).subscribe({
    next: () => {
      this.router.navigate(['/menu/ver-ubicacion'])
      this.toastr.success('Ubicacion creada con éxito.')
    }
  })
   
}
    


}
