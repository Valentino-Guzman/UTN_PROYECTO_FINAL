import { Component } from '@angular/core';
import { EdificioService } from '../../../../../services/edificio.service';
import { Edificio } from '../../../../../interfaces/edificio';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-edificio',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './crear-edificio.component.html',
  styleUrl: './crear-edificio.component.scss'
})
export class CrearEdificioComponent {


  edificioData: Edificio ={
    
    id: 0,
    nombre: '',
    calle: '',
    numero: 0
  }

  constructor(
    private edificio: EdificioService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  crearEdificio() {
    this.edificio.crearEdificio(this.edificioData).subscribe({
      next: () => {
        this.router.navigate(['/menu/ver-edificio'])
        this.toastr.success('edificio creado con éxito.')
      }
    })
     
  }

}
