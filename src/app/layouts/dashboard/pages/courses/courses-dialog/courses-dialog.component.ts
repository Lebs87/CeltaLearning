import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Courses } from '../models';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrl: './courses-dialog.component.sass'
})
export class CoursesDialogComponent {

  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCourse?: Courses) {
    this.courseForm = this.fb.group({
      coursesName: this.fb.control(''),
      startDate: [''],
      startTime: [''],
      endDate: [''],
      endTime: [''],
    })
    if (editingCourse) {
      this.courseForm.patchValue(editingCourse)
    }
  }

  onSave(): void {
    this.dialogRef.close(this.courseForm.value);
  }
}
