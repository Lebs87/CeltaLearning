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

  deleteProfessorById(id: number) {
    this.loadingService.setIsLoading(true);
    professors = professors.filter((el) => el.id != id);
    return this.getProfessors();
  };
}
