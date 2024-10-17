import { Component} from '@angular/core';
import { NavegacionComponent } from "../../components/navegacion/navegacion.component";
import { Register } from '../../interfaces/registro';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SvgFlechaComponent } from "../../components/svg-flecha/svg-flecha.component";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavegacionComponent, FormsModule, CommonModule, SvgFlechaComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerData: Register = {
    nombre: '',
    email: '',
    password: ''
  };
  constructor() {}
  
  register() {
    
  }
}
