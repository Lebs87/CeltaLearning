import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
    { path: 'students', loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentsModule) },
    { path: 'courses', loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule) },
    { path: 'professors', loadChildren: () => import('./pages/professors/professors.module').then((m) => m.ProfessorsModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }