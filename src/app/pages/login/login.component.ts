import { Component } from '@angular/core';
import { authService } from '../../services/auth.service';
import { Ilogin } from '../../interfaces/login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavegacionComponent } from '../../components/header/navegacion/navegacion.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, NavegacionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData: Ilogin = {
    email: '',
    password: ''
  };
 

  constructor(
    private auth: authService,
    private router: Router,
  ) {}

  login() {
    this.auth.login(this.loginData).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => console.error('login fallido', err)
    })
  }
}
