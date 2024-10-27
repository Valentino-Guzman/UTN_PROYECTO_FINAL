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
import { SectorComponent } from './components/gestiones/gestion_ordenes/orden-de-trabajo/sector/sector.component';
import { CrearActivoComponent } from './components/gestiones/gestion_infraestructura/activo/crear-activo/crear-activo.component';
import { VerSectorComponent } from './components/gestiones/gestion_infraestructura/sector/ver-sector/ver-sector.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { VerOperariosComponent } from './components/gestiones/gestion_operarios/ver-operarios/ver-operarios.component';
import { CrearOperarioComponent } from './components/gestiones/gestion_operarios/crear-operario/crear-operario.component';




export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { 
        path: 'menu', 
        component: MenuPrincipalComponent, 
        canActivate: [verificarGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'ordenes', component: OrdenDeTrabajoComponent },
            { path: 'plantilla/:id', component: PlantillaComponent },
            { path: 'infraestructura', component: InfraestructuraComponent },
            { path: 'operarios', component: OperariosComponent },

            { path: 'ver-activos', component: VerActivoComponent },
            { path: 'crear-activo', component: CrearActivoComponent},

            { path: 'ver-sectores', component: VerSectorComponent },
            { path: 'crear-sector', component: CrearSectorComponent},
            
            { path: 'ver-operarios', component: VerOperariosComponent },
            { path: 'crear-operario', component: CrearOperarioComponent },

            { path: 'configuracion', component: ConfiguracionComponent }
        ]
    },
    
    { path: 'vistaUsuario', component:VistaOrdenOperarioComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
