import { Component } from '@angular/core';
import { Students } from './models/index';
import { StudentsService } from '../../../../core/services/students.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './students-dialog/students-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.sass',
})

export class StudentsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'documentID', 'email', 'role', 'actions'];
  students: Students[] = [];
 
  constructor(private studentsService: StudentsService, public dialog: MatDialog){
    this.studentsService.getStudents().subscribe({
      next: (students) => {
        this.students = students;
      },
    });
  }

  onCreate(): void {
    this.dialog.open(StudentsDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.studentsService.createStudent(result).subscribe({
            next: (students) => (this.students = students),
          });
        }
      }
    })
  }

  onEdit(students: Students) {
    this.dialog.open(StudentsDialogComponent, {
      data: students,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.studentsService.editStudentById(students.id, result).subscribe({
            next: (students) => (this.students = students),
          });
        }
      }
    })
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

}
