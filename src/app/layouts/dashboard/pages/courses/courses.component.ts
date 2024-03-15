import { Component } from '@angular/core';
import { Courses } from './models';
import { CoursesService } from '../../../../core/services/courses.service';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.sass'
})

export class CoursesComponent {
  displayedColumns: string[] = ['id', 'coursesName', 'startDate', 'startTime', 'endDate', 'endTime', 'actions']
  courses: Courses[] = []

  constructor(private coursesService: CoursesService, public dialog: MatDialog) {
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
    });
  }
  onCreate(): void {
    this.dialog.open(CoursesDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.coursesService.createCourse(result).subscribe({
            next: (courses) => (this.courses = courses),
          });
        }
      }
    })
  }

  onEdit(course: Courses) {
    this.dialog.open(CoursesDialogComponent, {
      data: course,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.coursesService.editCourseById(course.id, result).subscribe({
            next: (courses) => (this.courses = courses),
          });
        }
      }
    })
  }

  onDelete(id: number) {
    if (confirm('¿Desea eliminar la selección?')) {
      this.coursesService.deleteCourseById(id).subscribe({
        next: (courses) => {
          this.courses = courses;
        },
      })
    }
  }
}
