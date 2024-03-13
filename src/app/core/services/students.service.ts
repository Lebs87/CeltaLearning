import { Injectable, Inject } from '@angular/core';
import { STUDENTS_TOKEN } from '../injection-tokens';
import { delay, finalize, of } from 'rxjs';
import { Students } from '../../layouts/dashboard/pages/students/models';
import { LoadingService } from './loading.service';

let students: Students[] = [
  {id: 1, firstName: 'Luis', lastName: 'Belisario', documentID: '1234565789', email: 'luis@mail.com', password: '123456', role: 'admin'},
  {id: 2, firstName: 'Luis Eduardo', lastName: 'Salcedo', documentID: '12234565789', email: 'luis2@mail.com', password: '123456', role: 'student'}
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
  constructor(private loadingService: LoadingService){}

  getStudents() {
    this.loadingService.setIsLoading(true);
    return of<Students[]>(students).pipe(delay(1000), finalize(()=> this.loadingService.setIsLoading(false)));
  };

  deleteStudentById(id: number) {
    this.loadingService.setIsLoading(true);
    students = students.filter((el)=> el.id != id);
    return of(students).pipe(delay(1000), finalize(()=> this.loadingService.setIsLoading(false)));
  };
}
