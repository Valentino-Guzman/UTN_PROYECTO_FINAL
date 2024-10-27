import { Routes } from '@angular/router';
import { verificarGuard } from './guard/verificar.guard';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlantillaComponent } from './components/plantillaOT/plantilla/plantilla.component';
import { DashboardComponent } from './pages/vistaAdmin/menu/dashboard/dashboard.component';
import { MenuPrincipalComponent } from './pages/vistaAdmin/menu/menu-principal/menu-principal.component';
import { InfraestructuraComponent } from './pages/vistaAdmin/menu/infraestructura/infraestructura.component';
import { OperariosComponent } from './pages/vistaAdmin/menu/operarios/operarios.component';
import { VistaOrdenOperarioComponent } from './pages/vistaOperario/vista-orden-operario/vista-orden-operario.component';
import { CrearSectorComponent } from './components/gestiones/gestion_infraestructura/sector/crear-sector/crear-sector.component';
import { OrdenDeTrabajoComponent } from './components/gestiones/gestion_ordenes/orden-de-trabajo/orden-contenedor/orden-de-trabajo.component';
import { VerActivoComponent } from './components/gestiones/gestion_infraestructura/activo/ver-activo/ver-activo.component';




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
            { path: 'ordenes', component: OrdenDeTrabajoComponent },
            { path: 'infraestructura', 
            component: InfraestructuraComponent, 
            children: [
                {path: 'crear-sector', component: CrearSectorComponent}
            ] },
            { path: 'operarios', component: OperariosComponent }
        ]
    },
    
    { path: 'vistaUsuario', component:VistaOrdenOperarioComponent},
    {path: 'plantilla/:id', component: PlantillaComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
