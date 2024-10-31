import { Component } from '@angular/core';
import { OperarioService } from '../../../../services/operario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Register, RegisterResponse } from '../../../../interfaces/registro';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-operario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './crear-operario.component.html',
  styleUrl: './crear-operario.component.scss'
})

export class CrearOperarioComponent {

  nuevoOperarioData: Register = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private operarioService: OperarioService,
    private toastr: ToastrService
  ) {}

  crearOperario() {
    this.operarioService.crearOperario(this.nuevoOperarioData).subscribe({
      next: (response:RegisterResponse) => {
        this.toastr.success(`El operario ${response.name}, fue creado con éxito.`,)
      },
      error: (error) => {
        console.error('Error al crear operario:', error);
      }
    });
  }
}
