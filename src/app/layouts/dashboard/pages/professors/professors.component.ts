import { Component } from '@angular/core';
import { ProfessorsService } from '../../../../core/services/professors.service';
import { Professors } from './models';
import { MatDialog } from '@angular/material/dialog';
import { ProfessorsDialogComponent } from './professors-dialog/professors-dialog.component';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrl: './professors.component.sass'
})
export class ProfessorsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'documentID', 'email', 'role', 'actions']
  professors : Professors[] = []

  constructor(private professorsService: ProfessorsService, public dialog: MatDialog) {
    this.professorsService.getProfessors().subscribe({
      next: (professors) => {
        this.professors = professors;
      },
    });
  }

  onCreate(): void {
    this.dialog.open(ProfessorsDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.professorsService.createProfessor(result).subscribe({
            next: (professors) => (this.professors = professors),
          });
        }
      }
    })
  }

  onEdit(professors: Professors) {
    this.dialog.open(ProfessorsDialogComponent, {
      data: professors,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.professorsService.editProfessorById(professors.id, result).subscribe({
            next: (professors) => (this.professors = professors),
          });
        }
      }
    })
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
