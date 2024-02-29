import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/login/login.component';
import { NotFoundComponent } from './layouts/not-found/not-found.component';
import { WelcomeComponent } from './layouts/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'auth/login', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, loadChildren: ()=> import('./layouts/dashboard/dashboard.module').then((m)=> m.DashboardModule),
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' } //Recordar que debe tener el simbolo previo del 404 para que lo saque de cualquier ruta previa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
