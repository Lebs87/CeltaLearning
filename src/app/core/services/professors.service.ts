import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { Professors } from '../../layouts/dashboard/pages/professors/models';
import { LoadingService } from './loading.service';

let professors: Professors[] = [
  {id: 1, firstName: 'Daniel', lastName: 'Belisario', documentID: '1234565789', email: 'luis@mail.com', password: '123456', role: 'admin'},
  {id: 2, firstName: 'Daniel Eduardo', lastName: 'Salcedo', documentID: '12234565789', email: 'luis2@mail.com', password: '123456', role: 'student'}
];

@Injectable()
export class ProfessorsService {
  constructor(private loadingService: LoadingService) {}

  getProfessors() {
    this.loadingService.setIsLoading(true);
    return of<Professors[]>(professors).pipe(delay(1000), finalize(()=> this.loadingService.setIsLoading(false)));
  };

  createProfessor(data: Professors) {
    const newId = this.getNextId();
    const newProfessor: Professors = {
      id: newId,
      firstName: data.firstName,
      lastName: data.lastName,
      documentID: data.documentID,
      email: data.email,
      password: data.password,
      role: data.role
    };
    professors = [...professors, newProfessor];
    return this.getProfessors();
  }

  editProfessorById(id: number, data: Professors) {
    professors = professors.map((el) => (el.id === id ? {...el, ...data} : el))
    return this.getProfessors();
  }

  deleteProfessorById(id: number) {
    professors = professors.filter((el) => el.id != id);
    return this.getProfessors();
  };

  private getNextId(): number {
    const ids = professors.map(professors => professors.id);
    const maxId = Math.max(...ids);
    return maxId + 1;
  };
}
