import { Injectable } from '@angular/core';
import { Observable, finalize, mergeMap } from 'rxjs';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../layouts/auth/pages/login/models';

@Injectable()
export class ProfileService {

  constructor(private loadingService: LoadingService, private httpClient: HttpClient){}

  getProfileById(id: number | string): Observable<User | undefined> {
    this.loadingService.setIsLoading(true);
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`).pipe(finalize(()=> this.loadingService.setIsLoading(false)));
  }
}
