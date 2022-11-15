import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NuestraEmpresaComponent } from './pages/nuestra-empresa/nuestra-empresa.component';
import { NovedadesOOfertasComponent } from './pages/novedades-o-ofertas/novedades-o-ofertas.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PorCepasComponent } from './pages/por-cepas/por-cepas.component';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { BannerServiceComponent } from './pages/banner-service/banner-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NuestraEmpresaComponent,
    NovedadesOOfertasComponent,
    GaleriaComponent,
    ContactoComponent,
    FooterComponent,
    PorCepasComponent,
    BodegasComponent,
    BannerServiceComponent,
    MenuprincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
