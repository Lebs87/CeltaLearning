import { Injectable, Inject } from '@angular/core';
//import { STUDENTS_TOKEN } from '../injection-tokens';
import { delay, finalize, of } from 'rxjs';
import { Students } from '../../layouts/dashboard/pages/students/models';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';

let students: Students[] = [
  {id: 1, firstName: 'Luis', lastName: 'Belisario', documentID: '1234565789', email: 'luis@mail.com', password: '123456', role: 'ADMIN'},
  {id: 2, firstName: 'Luis Eduardo', lastName: 'Salcedo', documentID: '12234565789', email: 'luis2@mail.com', password: '123456', role: 'STUDENT'}
];

/* @Injectable(
  si quiero inyectar a todos los componente este servicio uso  providedIn: 'root'
   {
  providedIn: 'root'
} ) */

@Injectable()
export class StudentsService {

  /*constructor(@Inject(STUDENTS_TOKEN) studentToken: string, private loadingService: LoadingService) { 
    console.log(` estoy usando un useValue para inyectar un token: ${studentToken}` )
  } */
  constructor(private loadingService: LoadingService, private httpClient: HttpClient){}

  getStudents() {
    this.loadingService.setIsLoading(true);
    //return of<Students[]>(students).pipe(delay(1000), finalize(()=> this.loadingService.setIsLoading(false)));
    return this.httpClient.get<Students[]>('http://localhost:3000/students').pipe(finalize(()=> this.loadingService.setIsLoading(false)))
  };

  createStudent(data: Students) {
    const newId = this.getNextId();
    const newStudent: Students = {
      id: newId,
      firstName: data.firstName,
      lastName: data.lastName,
      documentID: data.documentID,
      email: data.email,
      password: data.password,
      role: data.role
    };
    students = [...students, newStudent];
    return this.getStudents();
  }

  editStudentById(id: number, data: Students) {
    students = students.map((el) => (el.id === id ? {...el, ...data} : el))
    return this.getStudents();
  }

  deleteStudentById(id: number) {
    students = students.filter((el)=> el.id != id);
    return this.getStudents();
  };

  private getNextId(): number {
    const ids = students.map(students => students.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  };
}
