import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrdenDeTrabajoComponent } from './components/gestion_ordenes/orden-de-trabajo/orden-contenedor/orden-de-trabajo.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlantillaComponent } from './components/plantillaOT/plantilla/plantilla.component';
import { VerActivoComponent } from './components/gestion_infraestructura/activo/ver-activo/ver-activo.component';
import { CrearActivoComponent } from './components/gestion_infraestructura/activo/crear-activo/crear-activo.component';
import { verificarGuard } from './guard/verificar.guard';
import { VistaOrdenOperarioComponent } from './components/vistaOperario/vista-orden-operario/vista-orden-operario.component';
import { ModificarActivoComponent } from './components/gestion_infraestructura/activo/modificar-activo/modificar-activo.component';
import { VerSectorComponent } from './components/gestion_infraestructura/sector/ver-sector/ver-sector.component';
import { MenuPrincipalComponent } from './components/vistaAdmin/menu/menu-principal/menu-principal.component';
import { DashboardComponent } from './components/vistaAdmin/menu/dashboard/dashboard.component';
import { CrearSectorComponent } from './components/gestion_infraestructura/sector/crear-sector/crear-sector.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    { 
        path: 'menu', 
        component: MenuPrincipalComponent, 
        canActivate: [verificarGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'activos', component: VerActivoComponent },
            { path: 'ordenes', component: OrdenDeTrabajoComponent}
        ]
    },
    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'vistaUsuario', component:VistaOrdenOperarioComponent},
    {path: 'crear/activos', component: CrearActivoComponent},
    {path: 'plantilla/:id', component: PlantillaComponent},
    {path: 'modificarActivo/:id', component: ModificarActivoComponent},
    {path: 'sectores', component:VerSectorComponent},
    {path: 'sectores', component:CrearSectorComponent}
];
