import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsMockService {

  constructor() { 
    console.log('prueba del mock del servicio de studiantes')
  }

  getStudents() {
    console.log('Usuarios de la DDBB Mock')
    return [ 'Luis', 'Jorge', 'Daniel', 'Marcos']
  }
}
