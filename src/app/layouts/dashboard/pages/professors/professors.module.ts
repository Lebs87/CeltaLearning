import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorsRoutingModule } from './professors-routing.module';
import { ProfessorsComponent } from './professors.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ProfessorsService } from '../../../../core/services/professors.service';


@NgModule({
  declarations: [
    ProfessorsComponent
  ],
  imports: [
    CommonModule,
    ProfessorsRoutingModule,
    SharedModule
  ],
  providers: [
    ProfessorsService,
  ]
})
export class ProfessorsModule { }
