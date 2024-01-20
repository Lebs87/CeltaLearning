import { Component } from '@angular/core';
import { Student } from './models/index';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.sass'
})

export class StudentsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'documentID', 'email', 'role'];
  dataSource: Student[] = [
    {id: 1, firstName: 'Luis', lastName: 'Belisario', documentID: '1234565789', email: 'luis@mail.com', password: '123456', role: 'admin'},
    {id: 2, firstName: 'Luis2', lastName: 'Belisario2', documentID: '12234565789', email: 'luis2@mail.com', password: '123456', role: 'student'}
  ];

  onStudentSubmitted(ev: Student): void {
    this.dataSource = [...this.dataSource, { ...ev, id: this.dataSource.length +1}];
  }
}
