import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UbicacionComponent } from './components/orden-de-trabajo/ubicacion/ubicacion.component';
import { LoginComponent } from './pages/login/login.component';
import { OrdenDeTrabajoComponent } from './components/orden-de-trabajo/orden-de-trabajo.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'ubicacion', component:UbicacionComponent},
    {path: 'ordenes', component: OrdenDeTrabajoComponent},
];
