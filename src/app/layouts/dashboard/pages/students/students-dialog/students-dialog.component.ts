import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Students } from '../models';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrl: './students-dialog.component.sass'
})
export class StudentsDialogComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingStudent?: Students) {
    this.studentForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      documentID: this.fb.control(''),
      email: this.fb.control(''),
      password: this.fb.control(''),
      role: this.fb.control(''),
    })
    if (editingStudent) {
      this.studentForm.patchValue(editingStudent)
    }
  }

  onSave(): void {
    this.dialogRef.close(this.studentForm.value);
  }
}
