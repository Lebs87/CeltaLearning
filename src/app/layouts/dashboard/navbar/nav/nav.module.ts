import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { StudentsComponent } from '../../pages/students/students.component';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'students', component: StudentsComponent },
    ])
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
