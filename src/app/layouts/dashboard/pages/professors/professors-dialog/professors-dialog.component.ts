import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Professors } from '../models';

@Component({
  selector: 'app-professors-dialog',
  templateUrl: './professors-dialog.component.html',
  styleUrl: './professors-dialog.component.sass'
})
export class ProfessorsDialogComponent {
  professorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProfessorsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingProfessor?: Professors) {
    this.professorForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      documentID: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
      role: this.fb.control(''),
    })
    if (editingProfessor) {
      this.professorForm.patchValue(editingProfessor)
    }
  }

  onSave(): void {
    this.dialogRef.close(this.professorForm.value);
  }
}
