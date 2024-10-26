import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  
  nombreOperario: string = '';

  constructor(

    private cookie: CookieService
  ) {}

  ngOnInit() {
    this.getCookie('operario');
  } 

  getCookie(name: string) {
     this.nombreOperario = this.cookie.get(name)
  }
}
