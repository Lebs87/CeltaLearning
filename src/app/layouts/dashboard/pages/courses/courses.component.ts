import { Component } from '@angular/core';
import { Courses } from './models';
import { CoursesService } from '../../../../core/services/courses.service';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.sass'
})
export class CoursesComponent {
  displayedColumns: string[] =  ['id', 'coursesName', 'startDate', 'endDate', 'actions' ]
  courses: Courses[] = []

  constructor(private coursesService: CoursesService, private loadingService: LoadingService) {
    this.loadingService.setIsLoading(true);
    this.coursesService.getCourses().subscribe({
        next: (courses) => {
          this.courses = courses;
        },
        complete:  () => {
          this.loadingService.setIsLoading(false);
        },
    });
  }

  onDelete(id: number) {
    this.loadingService.setIsLoading(true);
    this.coursesService.deleteCourseById(id).subscribe({
        next: (courses) => {
          this.courses = courses;
        },
        complete:  () => {
          this.loadingService.setIsLoading(false);
        },
    })
  }
}
