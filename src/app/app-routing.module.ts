import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BodegasComponent } from './pages/bodegas/bodegas.component';
import { NovedadesOOfertasComponent } from './pages/novedades-o-ofertas/novedades-o-ofertas.component';
import { NuestraEmpresaComponent } from './pages/nuestra-empresa/nuestra-empresa.component';
import { PorCepasComponent } from './pages/por-cepas/por-cepas.component';

const routes: Routes = [
  {
    path:"inicio",component:InicioComponent
  },
  {
    path:"bodegas",component:BodegasComponent
  },
  {
    path:"novedades-o-ofertas",component:NovedadesOOfertasComponent
  },
  {
    path:"nuestra-empresa",component:NuestraEmpresaComponent
  },
  {
    path:"por-cepas",component:PorCepasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
