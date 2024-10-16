import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    {path: 'login', component: InicioComponent},
    {path: 'home', component: HomeComponent}
];
