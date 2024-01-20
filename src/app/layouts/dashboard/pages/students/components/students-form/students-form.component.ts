import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrl: './students-form.component.sass'
})
export class StudentsFormComponent {
  studentForm: FormGroup;

  @Output()
  studentSubmitted = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: this.fb.control('', Validators.required),
      lastName: this.fb.control('', Validators.required),
      documentID: this.fb.control('', Validators.required),
      email: this.fb.control('', Validators.required),
      role: this.fb.control('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else {
      this.studentSubmitted.emit(this.studentForm.value);
      this.studentForm.reset();
    }
  }
}
