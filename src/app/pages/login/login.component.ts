import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { authService } from '../../services/auth.service';
import { Login, LoginResponse } from '../../interfaces/login';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';

import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, NavegacionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData: Login = {
    email: '',
    password: ''
  };
 

  constructor(
    private auth: authService,
    private router: Router,
    private toastr: ToastrService,
    private cookie: CookieService
  ) {}

  login() {
    this.auth.login(this.loginData).subscribe({
      next: (response:LoginResponse) =>  {
        this.toastr.success('Inicio de sesión exitoso', '¡Bienvenido!');
        this.cookie.set('authtoken', response.token);
        this.router.navigate(['/home'])
      },
        error: () => {
          this.toastr.error('Error al iniciar sesión, intente nuevamente.')
        }
    })
  }
}
