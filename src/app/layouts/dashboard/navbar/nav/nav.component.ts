import { Component } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass'
})
export class NavComponent {
  showCourses = false;
  showProfessor = false;
  showStudents = false;

  constructor(
    private authService: AuthService
  ){}

  logout(): void {
    this.authService.logout();
  }
}
