import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/componentes/main-home/home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    loadChildren : () =>  import(('../app/componentes/home/home.module')).then(m =>  m.HomeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
