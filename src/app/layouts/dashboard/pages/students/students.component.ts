import { Component } from '@angular/core';
import { Student } from './models/index';
import { StudentsService } from '../../../../core/services/students.service';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.sass',
})

export class StudentsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'documentID', 'email', 'role'];
  dataSource: Student[] = [
    {id: 1, firstName: 'Luis', lastName: 'Belisario', documentID: '1234565789', email: 'luis@mail.com', password: '123456', role: 'admin'},
    {id: 2, firstName: 'Luis Eduardo', lastName: 'Salcedo', documentID: '12234565789', email: 'luis2@mail.com', password: '123456', role: 'student'}
  ];
 

  constructor(private loadingService : LoadingService,  private studentsService: StudentsService){

  }


  onStudentSubmitted(ev: Student): void { 
    this.loadingService.setIsLoading(true);
    setTimeout(()=>{
    this.dataSource = [...this.dataSource, { ...ev, id: this.dataSource.length +1}]},3000)
    setTimeout(()=>{
      this.loadingService.setIsLoading(false
        ) },5000)
 }
}
