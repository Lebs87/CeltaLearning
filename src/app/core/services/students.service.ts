import { Injectable } from '@angular/core';
import { Observable, finalize, mergeMap } from 'rxjs';
import { Students } from '../../layouts/dashboard/pages/students/models';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class StudentsService {

  constructor(private loadingService: LoadingService, private httpClient: HttpClient){}

  getStudents() {
    this.loadingService.setIsLoading(true);
    return this.httpClient.get<Students[]>(`${environment.apiUrl}/students`).pipe(finalize(()=> this.loadingService.setIsLoading(false)))
  };

  getStudentById(id: number | string): Observable<Students[] | undefined> {
    this.loadingService.setIsLoading(true);
    return this.httpClient.get<Students[]>(`${environment.apiUrl}/students/${id}`).pipe(finalize(()=> this.loadingService.setIsLoading(false)))
  }
  createStudent(data: Students) {
    return this.httpClient.post<Students>(`${environment.apiUrl}/students`, data).pipe(mergeMap(()=> this.getStudents()))
  }

  editStudentById(id: number, data: Students) {
    return this.httpClient.put<Students>(`${environment.apiUrl}/students`, data).pipe(mergeMap(()=> this.getStudents()));
  }

  deleteStudentById(id: number) {
    return this.httpClient.delete<Students>(`${environment.apiUrl}/students/${id}`).pipe(mergeMap(()=> this.getStudents()));
  };

  /* private getNextId(): number {
    const ids = students.map(students => students.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  }; */
}
