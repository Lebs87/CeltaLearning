import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';
import { StudentsComponent } from '../../pages/students/students.component';



@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
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
