import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { SharedModule } from '../../../../shared/shared.module';
//  SERVICIOS
import { StudentsService } from '../../../../core/services/students.service';
import { STUDENTS_TOKEN } from '../../../../core/injection-tokens';
//import { StudentsMockService } from '../../../../core/services/students-mock.service';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    StudentsComponent
  ],
  providers: [
    //Aqui comento estos servicios porque estoy inyectando los servicios desde el modulo de servicio con providedIn: 'root', si los descomentos los uso a ellos
    StudentsService,
    /* {
      provide: StudentsService,
      useClass: StudentsMockService
    } */

    //uso del use value
    {
      provide: STUDENTS_TOKEN,
      useValue: 'Soy un valor que simula un UUID'
    }
  ]
})
export class StudentsModule { }
