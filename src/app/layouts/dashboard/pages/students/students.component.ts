import { Component } from '@angular/core';
import { Students } from './models/index';
import { StudentsService } from '../../../../core/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.sass',
})

export class StudentsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'documentID', 'email', 'role', 'actions'];
  students: Students[] = [];
 
  constructor(private studentsService: StudentsService){
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.students = students;
      },
    });
  }

  onDelete(id: number) {
    if (confirm('¿Desea eliminar la selección?')) {
      this.studentsService.deleteStudentById(id).subscribe({
        next: (students) => {
          this.students = students;
        },
      })
    }
  }

  onStudentSubmitted(ev: Students): void { 
    this.students = [...this.students, { ...ev, id: this.students.length +1}]}
}
