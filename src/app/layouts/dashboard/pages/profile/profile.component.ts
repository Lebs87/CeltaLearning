import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../../core/services/profile.service';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass'
})
export class ProfileComponent {
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private loadingService: LoadingService
  ) {
    this.loadingService.setIsLoading(true);
    this.profileService.getProfileById(this.route.snapshot.params['id']).subscribe({
      next: (findedUser) => {
        console.log(findedUser);
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }
}