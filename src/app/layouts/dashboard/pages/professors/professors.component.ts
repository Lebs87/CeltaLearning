import { Component } from '@angular/core';
import { ProfessorsService } from '../../../../core/services/professors.service';
import { Professors } from './models';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrl: './professors.component.sass'
})
export class ProfessorsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'documentID', 'email', 'role', 'actions']
  professors : Professors[] = []

  constructor(private professorsService: ProfessorsService, private loadingService: LoadingService) {
    this.professorsService.getProfessors().subscribe({
      next: (professors) => {
        this.professors = professors;
      },
    });
  }

  onDelete(id: number) {
    if (confirm('¿Desea eliminar la selección?')) {
      this.professorsService.deleteProfessorById(id).subscribe({
        next: (professors) => {
          this.professors = professors;
        },
      })
    }
  }
}
