import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.scss'
})
export class NavegacionComponent {
  selected: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {
    const currentRoute = this.router.url;
    if (currentRoute.includes('login')) {
      this.selected = 'login';
    } else if (currentRoute.includes('register')) {
      this.selected = 'register';
    }
  }

  select(page: string) {
    this.selected = page;
  }

}
