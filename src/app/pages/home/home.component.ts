import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgOrdenComponent } from "../../components/svg/svg-orden/svg-orden.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, RouterLink, SvgOrdenComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 
}
