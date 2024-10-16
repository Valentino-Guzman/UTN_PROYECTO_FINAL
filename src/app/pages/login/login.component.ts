import { Component } from '@angular/core';
import { BackUtnService } from '../../services/back-utn.service';
import { Ilogin} from '../../interfaces/login';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData: Ilogin = {
    email: '',
    password: ''
  };
 

  constructor(
  
    private backUtn: BackUtnService,
    private router: Router,
  ) {}

  login() {
    this.backUtn.login(this.loginData).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => console.error('login fallido', err)
    })
  }
}
