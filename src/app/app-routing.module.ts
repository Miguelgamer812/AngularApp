import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},{path:'home', component:HomeComponent},{path:'galeria',component:GaleriaComponent},
  {path: '',   redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
