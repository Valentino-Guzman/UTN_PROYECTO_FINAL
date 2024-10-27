import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private darkTheme: boolean = false;

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark-theme', this.darkTheme);
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }
  
}
