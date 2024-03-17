import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
    { path: 'students', canActivate: [adminGuard], loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentsModule) },
    { path: 'courses', canActivate: [adminGuard], loadChildren: () => import('./pages/courses/courses.module').then((m) => m.CoursesModule) },
    { path: 'professors', canActivate: [adminGuard], loadChildren: () => import('./pages/professors/professors.module').then((m) => m.ProfessorsModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }