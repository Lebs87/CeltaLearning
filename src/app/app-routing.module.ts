import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { LoginComponent } from './layouts/auth/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: '**', component: DashboardComponent }
    ]
  },
  { path: 'auth/login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
