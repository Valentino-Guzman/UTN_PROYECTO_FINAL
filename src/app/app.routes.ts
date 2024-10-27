import { Routes } from '@angular/router';
import { verificarGuard } from './guard/verificar.guard';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PlantillaComponent } from './components/plantillaOT/plantilla/plantilla.component';
<<<<<<< HEAD
import { VerActivoComponent } from './components/gestion_infraestructura/activo/ver-activo/ver-activo.component';
import { CrearActivoComponent } from './components/gestion_infraestructura/activo/crear-activo/crear-activo.component';
import { verificarGuard } from './guard/verificar.guard';
import { VistaOrdenOperarioComponent } from './components/vistaOperario/vista-orden-operario/vista-orden-operario.component';
import { ModificarActivoComponent } from './components/gestion_infraestructura/activo/modificar-activo/modificar-activo.component';
import { VerSectorComponent } from './components/gestion_infraestructura/sector/ver-sector/ver-sector.component';
import { MenuPrincipalComponent } from './components/vistaAdmin/menu/menu-principal/menu-principal.component';
import { DashboardComponent } from './components/vistaAdmin/menu/dashboard/dashboard.component';
import { CrearSectorComponent } from './components/gestion_infraestructura/sector/crear-sector/crear-sector.component';
=======
import { DashboardComponent } from './pages/vistaAdmin/menu/dashboard/dashboard.component';
import { MenuPrincipalComponent } from './pages/vistaAdmin/menu/menu-principal/menu-principal.component';
import { InfraestructuraComponent } from './pages/vistaAdmin/menu/infraestructura/infraestructura.component';
import { OperariosComponent } from './pages/vistaAdmin/menu/operarios/operarios.component';
import { VistaOrdenOperarioComponent } from './pages/vistaOperario/vista-orden-operario/vista-orden-operario.component';
import { CrearSectorComponent } from './components/gestiones/gestion_infraestructura/sector/crear-sector/crear-sector.component';
import { OrdenDeTrabajoComponent } from './components/gestiones/gestion_ordenes/orden-de-trabajo/orden-contenedor/orden-de-trabajo.component';
import { VerActivoComponent } from './components/gestiones/gestion_infraestructura/activo/ver-activo/ver-activo.component';


>>>>>>> c8071c7d3cc190e136383fbcb89ef81aec7fff0b


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
<<<<<<< HEAD
    {path: 'modificarActivo/:id', component: ModificarActivoComponent},
    {path: 'sectores', component:VerSectorComponent},
    {path: 'sectores', component:CrearSectorComponent}
=======
    { path: '', redirectTo: '/home', pathMatch: 'full' },
>>>>>>> c8071c7d3cc190e136383fbcb89ef81aec7fff0b
];
