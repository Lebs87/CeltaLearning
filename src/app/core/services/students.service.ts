import { Injectable, Inject } from '@angular/core';
import { STUDENTS_TOKEN } from '../injection-tokens';

/* @Injectable(
  si quiero inyectar a todos los componente este servicio uso  providedIn: 'root'
   {
  providedIn: 'root'
} ) */

@Injectable()
export class StudentsService {

  constructor(@Inject(STUDENTS_TOKEN) studentToken: string) { 
    console.log(` estoy usando un useValue para inyectar un token: ${studentToken}` )
  }
}
