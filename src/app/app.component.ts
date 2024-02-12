import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'CeltaLearning';

  isLoading = false;

  constructor(private loadingService : LoadingService){
    this.loadingService.isLoading$

    this.loadingService.isLoading$.subscribe({
      next: (value) => {
        this.isLoading = value;
      }
    })
  }
}
