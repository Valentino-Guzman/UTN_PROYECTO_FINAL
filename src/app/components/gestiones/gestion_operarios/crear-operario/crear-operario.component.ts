import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Register, RegisterResponse } from '../../../../interfaces/registro';
import { ToastrService } from 'ngx-toastr';
import { authService } from '../../../../services/auth.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crear-operario',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
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
    private operarioService: authService,
    private toastr: ToastrService
  ) {}

  crearOperario() {
    this.operarioService.register(this.nuevoOperarioData).subscribe({
      next: (response:RegisterResponse) => {
        this.toastr.success(`El operario, fue creado con éxito.`,)
      },
      error: (error) => {
        console.error('Error al crear operario:', error);
      }
    });
  }
}
