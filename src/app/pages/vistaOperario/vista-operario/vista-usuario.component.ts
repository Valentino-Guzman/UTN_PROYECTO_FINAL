// vista-usuario.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperarioService } from '../../../services/operario.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.scss']
})
export class VistaUsuarioComponent implements OnInit {
  nombreOperario: string = 'Nombre del Operario';

  constructor(private router: Router, private operarioService: OperarioService) {}

  ngOnInit(): void {
    // this.nombreOperario = this.operarioService.obtenerOperario();
  }

  verOrdenAsignada(): void {
    this.router.navigate(['/ruta-a-orden-asignada']);
  }

  regresar(): void {
    this.router.navigate(['/ruta-anterior']);
  }
}


