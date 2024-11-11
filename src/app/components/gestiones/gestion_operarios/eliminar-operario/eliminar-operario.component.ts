import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperarioService } from '../../../../services/operario.service';


@Component({
  selector: 'app-eliminar-operario',
  templateUrl: './eliminar-operario.component.html',
  styleUrls: ['./eliminar-operario.component.css']
})
export class EliminarOperarioComponent implements OnInit {
  buscarId: string = ''; 
  operarioData: { name: string; email: string } | null = null;
  operarioNoEncontrado: boolean = false;

  constructor(
    private router: Router, 
    private operarioService: OperarioService) 
    
  {}

  ngOnInit(): void {}

  // buscarOperario() {
  //   this.operarioService.buscarOperario(this.buscarId).subscribe(
  //     (data) => {
  //       this.operarioData = data;
  //       this.operarioNoEncontrado = false;
  //     },
  //     (error) => {
  //       console.error('Operario no encontrado', error);
  //       this.operarioData = null;
  //       this.operarioNoEncontrado = true;
  //     }
  //   );
  // }

  // eliminarOperario() {
  //   if (this.operarioData) {
  //     this.operarioService.eliminarOperario(this.buscarId).subscribe(
  //       () => {
  //         console.log(`Operario ${this.operarioData?.name} eliminado.`);
  //         this.router.navigate(['']); 
  //       },
  //       (error) => {
  //         console.error('Error al eliminar operario', error);
  //       }
  //     );
  //   }
  // }

  regresar() {
    this.router.navigate(['']); 
  }
}
