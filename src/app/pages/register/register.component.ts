import { Component} from '@angular/core';
import { NavegacionComponent } from "../../components/navegacion/navegacion.component";
import { Register } from '../../interfaces/registro';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SvgFlechaComponent } from "../../components/svg/svg-flecha/svg-flecha.component";
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavegacionComponent, FormsModule, CommonModule, SvgFlechaComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerData: Register = {
    name: '',
    email: '',
    password: ''
  };
  constructor(
    private register: authService,
    private router: Router
  ) {}
  
  registro() {
    this.register.register(this.registerData).subscribe({
      next: () => this.router.navigate(['/login'])
      
    })
  }
}
