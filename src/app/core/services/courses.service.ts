import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { Courses } from '../../layouts/dashboard/pages/courses/models';
import { LoadingService } from './loading.service';

let courses: Courses[] = [
  { id: 1, coursesName: 'Angular', startDate: new Date(2024, 3, 14), startTime: '18:00', endDate: new Date(2024, 11, 14), endTime: '19:00' },
  { id: 2, coursesName: 'React', startDate: new Date(2024, 3, 14), startTime: '19:00', endDate: new Date(2024, 11, 14), endTime: '20:00' }
];

@Injectable()
export class CoursesService {
  constructor(private loadingService: LoadingService) { }

  getCourses() {
    this.loadingService.setIsLoading(true);
    return of<Courses[]>(courses).pipe(delay(1000), finalize(() => this.loadingService.setIsLoading(false)));
  };

  createCourse(data: Courses) {
    const newId = this.getNextId();

    const newCourse: Courses = {
      id: newId,
      coursesName: data.coursesName,
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime
    };
    courses = [...courses, newCourse];
    return this.getCourses();
  }

  editCourseById(id: number, data: Courses) {
    courses = courses.map((el) => (el.id === id ? {...el, ...data} : el))
    return this.getCourses();
  }

  deleteCourseById(id: number) {
    this.loadingService.setIsLoading(true);
    courses = courses.filter((el) => el.id != id);
    return this.getCourses();
  };

  private getNextId(): number {
    const ids = courses.map(course => course.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  };

}
