import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdenDeTrabajoComponent } from './components/gestion_ordenes/orden-de-trabajo/orden-contenedor/orden-de-trabajo.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ordenes', component: OrdenDeTrabajoComponent},
];
