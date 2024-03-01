import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsModule } from './pages/students/students.module';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavModule } from './navbar/nav/nav.module';
import { HomeModule } from './pages/home/home.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StudentsModule,
    MatSidenavModule,
    NavModule,
    HomeModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'home/:id', component: HomeComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule), }
    ])
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
