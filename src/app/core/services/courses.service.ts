import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { Courses } from '../../layouts/dashboard/pages/courses/models';
import { LoadingService } from './loading.service';

let courses: Courses[] = [
  { id: 1, coursesName: 'Angular', startDate: new Date(2024, 3, 14, 9, 30), endDate: new Date(2024, 11, 14) },
  { id: 2, coursesName: 'Agile', startDate: new Date(2024, 3, 14, 9, 30), endDate: new Date(2024, 11, 14) }
];

@Injectable()
export class CoursesService {
  constructor(private loadingService: LoadingService) {}

  getCourses() {
    this.loadingService.setIsLoading(true);
    return of<Courses[]>(courses).pipe(delay(1000), finalize(()=> this.loadingService.setIsLoading(false)));
  };

  deleteCourseById(id: number) {
    this.loadingService.setIsLoading(true);
    courses = courses.filter((el) => el.id != id);
    return of(courses).pipe(delay(1000), finalize(()=> this.loadingService.setIsLoading(false)));
  };
}
