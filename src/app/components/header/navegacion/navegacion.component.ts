import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.scss'
})
export class NavegacionComponent {
  selected: string = 'login'; 

  select(view: string) {
    this.selected = view;
  }

}
