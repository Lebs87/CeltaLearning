import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Courses } from '../../layouts/dashboard/pages/courses/models';

let courses: Courses[] = [
  { id: 1, coursesName: 'Angular', startDate: new Date(2024, 3, 14, 9, 30), endDate: new Date(2024, 11, 14) },
  { id: 2, coursesName: 'Agile', startDate: new Date(2024, 3, 14, 9, 30), endDate: new Date(2024, 11, 14) }
];

@Injectable()
export class CoursesService {

  getCourses() {
    return of<Courses[]>(courses).pipe(delay(1000));
  };

  deleteCourseById(id: number) {
    courses = courses.filter((el) => el.id != id);
    return of(courses).pipe(delay(1000));
  };
}
