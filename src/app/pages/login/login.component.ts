import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { authService } from '../../services/auth.service';
import { Login, LoginResponse } from '../../interfaces/login';
import { NavegacionComponent } from '../../components/navegacion/navegacion.component';

import { ToastrService } from 'ngx-toastr';
import { CookieService } from 'ngx-cookie-service'
import { SvgFlechaComponent } from "../../components/svg/svg-flecha/svg-flecha.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, NavegacionComponent, SvgFlechaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  nombreOperario: string = '';

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
        this.cookie.set('operario', response.user.name)
        this.cookie.set('role', response.user.rol);
        this.router.navigate(['/menu'])
      },
        error: () => {
          this.toastr.error('Error al iniciar sesión, intente nuevamente.')
        }
    })
  }
}
