import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-vista-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vista-usuario.component.html',
  styleUrl: './vista-usuario.component.scss'
})
export class VistaUsuarioComponent implements OnInit {
  operarioId: string | null = null;
  nombreOperario: string = '';
  
  constructor(
    private route: ActivatedRoute, 
    private cookie: CookieService,
  ) {}


  ngOnInit(): void {
    this.operarioId = this.route.snapshot.paramMap.get('id');
    console.log('Operario ID:', this.operarioId);
    this.obtenerOperario() 
  }

  obtenerOperario() {
    const operarioName = this.cookie.get('operario');
    this.nombreOperario = operarioName;
  }

}