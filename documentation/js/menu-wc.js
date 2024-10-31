'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">utn-proyecto-final documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ActivoComponent.html" data-type="entity-link" >ActivoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BtnAtrasComponent.html" data-type="entity-link" >BtnAtrasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CalendarioComponent.html" data-type="entity-link" >CalendarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CodigoUnicoComponent.html" data-type="entity-link" >CodigoUnicoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfiguracionComponent.html" data-type="entity-link" >ConfiguracionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CrearActivoComponent.html" data-type="entity-link" >CrearActivoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CrearEdificioComponent.html" data-type="entity-link" >CrearEdificioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CrearOperarioComponent.html" data-type="entity-link" >CrearOperarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CrearPisoComponent.html" data-type="entity-link" >CrearPisoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CrearSectorComponent.html" data-type="entity-link" >CrearSectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CrearUbicacionComponent.html" data-type="entity-link" >CrearUbicacionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardComponent.html" data-type="entity-link" >DashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DescripcionComponent.html" data-type="entity-link" >DescripcionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EdificioComponent.html" data-type="entity-link" >EdificioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterContenedorComponent.html" data-type="entity-link" >FooterContenedorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GraficoOrdenesComponent.html" data-type="entity-link" >GraficoOrdenesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderLogoComponent.html" data-type="entity-link" >HeaderLogoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfraestructuraComponent.html" data-type="entity-link" >InfraestructuraComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InicioComponent.html" data-type="entity-link" >InicioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MenuPrincipalComponent.html" data-type="entity-link" >MenuPrincipalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ModificarActivoComponent.html" data-type="entity-link" >ModificarActivoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavegacionComponent.html" data-type="entity-link" >NavegacionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ObservacionComponent.html" data-type="entity-link" >ObservacionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OperariosComponent.html" data-type="entity-link" >OperariosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OperariosComponent-1.html" data-type="entity-link" >OperariosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrdenDeTrabajoComponent.html" data-type="entity-link" >OrdenDeTrabajoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/OrdenesComponent.html" data-type="entity-link" >OrdenesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PisoComponent.html" data-type="entity-link" >PisoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlantillaComponent.html" data-type="entity-link" >PlantillaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link" >RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SectorComponent.html" data-type="entity-link" >SectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgBasuraComponent.html" data-type="entity-link" >SvgBasuraComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgChecklistComponent.html" data-type="entity-link" >SvgChecklistComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgConfiguracionComponent.html" data-type="entity-link" >SvgConfiguracionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgDashboardComponent.html" data-type="entity-link" >SvgDashboardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgEdificioComponent.html" data-type="entity-link" >SvgEdificioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgEditarComponent.html" data-type="entity-link" >SvgEditarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgFlechaComponent.html" data-type="entity-link" >SvgFlechaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgInfraestructuraComponent.html" data-type="entity-link" >SvgInfraestructuraComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgLlaveComponent.html" data-type="entity-link" >SvgLlaveComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgOperadorComponent.html" data-type="entity-link" >SvgOperadorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgOperariosComponent.html" data-type="entity-link" >SvgOperariosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgOrdenComponent.html" data-type="entity-link" >SvgOrdenComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SvgUtnComponent.html" data-type="entity-link" >SvgUtnComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TareaComponent.html" data-type="entity-link" >TareaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TipoOtComponent.html" data-type="entity-link" >TipoOtComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UbicacionComponent.html" data-type="entity-link" >UbicacionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerActivoComponent.html" data-type="entity-link" >VerActivoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerEdificioComponent.html" data-type="entity-link" >VerEdificioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerOperariosComponent.html" data-type="entity-link" >VerOperariosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerPisoComponent.html" data-type="entity-link" >VerPisoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerSectorComponent.html" data-type="entity-link" >VerSectorComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VerUbicacionComponent.html" data-type="entity-link" >VerUbicacionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VistaOrdenComponent.html" data-type="entity-link" >VistaOrdenComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VistaOrdenOperarioComponent.html" data-type="entity-link" >VistaOrdenOperarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VistaUsuarioComponent.html" data-type="entity-link" >VistaUsuarioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WelcomeComponent.html" data-type="entity-link" >WelcomeComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ActivoService.html" data-type="entity-link" >ActivoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/authService.html" data-type="entity-link" >authService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EdificioService.html" data-type="entity-link" >EdificioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OperarioService.html" data-type="entity-link" >OperarioService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdenDeTrabajoService.html" data-type="entity-link" >OrdenDeTrabajoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PisoService.html" data-type="entity-link" >PisoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectorService.html" data-type="entity-link" >SectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TareaService.html" data-type="entity-link" >TareaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ThemeService.html" data-type="entity-link" >ThemeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TipoOtService.html" data-type="entity-link" >TipoOtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UbicacionService.html" data-type="entity-link" >UbicacionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Activo.html" data-type="entity-link" >Activo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/activo_desc.html" data-type="entity-link" >activo_desc</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Codigo_unico.html" data-type="entity-link" >Codigo_unico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Edificio.html" data-type="entity-link" >Edificio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GraficoOrden.html" data-type="entity-link" >GraficoOrden</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginResponse.html" data-type="entity-link" >LoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Operario.html" data-type="entity-link" >Operario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Orden.html" data-type="entity-link" >Orden</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrdenResponse.html" data-type="entity-link" >OrdenResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrdenStatus.html" data-type="entity-link" >OrdenStatus</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Piso.html" data-type="entity-link" >Piso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Register.html" data-type="entity-link" >Register</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RegisterResponse.html" data-type="entity-link" >RegisterResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sector.html" data-type="entity-link" >Sector</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tarea.html" data-type="entity-link" >Tarea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tipo_ot.html" data-type="entity-link" >Tipo_ot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ubicacion.html" data-type="entity-link" >Ubicacion</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});