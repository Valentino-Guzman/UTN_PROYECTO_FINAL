import { Component} from '@angular/core';
import { WelcomeComponent } from "./welcome/welcome.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WelcomeComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  
} 
