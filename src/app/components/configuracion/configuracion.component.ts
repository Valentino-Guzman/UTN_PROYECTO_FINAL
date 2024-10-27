import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.scss'
})
export class ConfiguracionComponent {
  
  constructor(
    private themeService: ThemeService
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get isDarkTheme() {
    return this.themeService.isDarkTheme();
  }
}
