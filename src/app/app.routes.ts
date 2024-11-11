import { Routes } from '@angular/router';
import { verificarGuard } from './guard/verificar.guard';

import { InicioComponent } from './components/inicio/inicio.component';
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
import { VerOperarioComponent } from './components/gestiones/gestion_operarios/ver-operarios/ver-operarios.component';
import { CrearOperarioComponent } from './components/gestiones/gestion_operarios/crear-operario/crear-operario.component';
import { OrdenesComponent } from './pages/vistaAdmin/menu/ordenes/ordenes.component';
import { CrearEdificioComponent } from './components/gestiones/gestion_infraestructura/edificio/crear-edificio/crear-edificio.component';
import { VerEdificioComponent } from './components/gestiones/gestion_infraestructura/edificio/ver-edificio/ver-edificio.component';
import { CrearPisoComponent } from './components/gestiones/gestion_infraestructura/piso/crear-piso/crear-piso.component';
import { VerPisoComponent } from './components/gestiones/gestion_infraestructura/piso/ver-piso/ver-piso.component';
import { VerUbicacionComponent } from './components/gestiones/gestion_infraestructura/ubicacion/ver-ubicacion/ver-ubicacion.component';
import { CrearUbicacionComponent } from './components/gestiones/gestion_infraestructura/ubicacion/crear-ubicacion/crear-ubicacion.component';
import { VistaOrdenComponent } from './components/gestiones/gestion_ordenes/verOrden/vista-orden/vista-orden.component';
import { VistaUsuarioComponent } from './pages/vistaOperario/vista-operario/vista-usuario.component';
import { OrdenesComponentOperario } from './pages/vistaOperario/ordenes/ordenes.component';



export const routes:Routes = [
    { path: '', component: InicioComponent }, 
    { path: 'login', component: LoginComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { 
        path: 'menu', 
        component: MenuPrincipalComponent, 
        canActivate: [verificarGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'ordenes', component: OrdenesComponent },
            { path: 'ver-ordenes', component: VistaOrdenComponent },
            { path: 'generar-orden', component: OrdenDeTrabajoComponent },
            { path: 'infraestructura', component: InfraestructuraComponent },
            { path: 'operarios', component: OperariosComponent },

            { path: 'ver-activos', component: VerActivoComponent },
            { path: 'crear-activo', component: CrearActivoComponent},

            { path: 'ver-sectores', component: VerSectorComponent },
            { path: 'crear-sector', component: CrearSectorComponent},
            
            { path: 'ver-operarios', component: VerOperarioComponent },
            { path: 'crear-operario', component: CrearOperarioComponent },

            { path: 'configuracion', component: ConfiguracionComponent },

            { path: 'crear-edificio', component: CrearEdificioComponent },
            { path: 'ver-edificio', component: VerEdificioComponent },

            { path: 'crear-piso', component: CrearPisoComponent },
            { path: 'ver-piso',component: VerPisoComponent },

            { path: 'ver-ubicaciones',component: VerUbicacionComponent },
            { path: 'crear-ubicacion', component: CrearUbicacionComponent },

            { path: 'ver-pisos',component: VerPisoComponent },
            { path: 'crear-piso', component: CrearPisoComponent },

            { path: 'ver-edificios',component: VerEdificioComponent },
            { path: 'crear-piso', component: CrearEdificioComponent }

        ]
    },
    { path: 'menu/plantilla/:id', component: PlantillaComponent },
    { path: 'vistaUsuario/:id', component: VistaUsuarioComponent },
    { path: 'vistaUsuario/:id/ordenesOperario', component: OrdenesComponentOperario },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
