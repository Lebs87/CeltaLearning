import { Injectable } from '@angular/core';
import { User } from '../../layouts/auth/pages/login/models';
import { Router } from '@angular/router';
import { LoginData } from '../../layouts/auth/pages/login/models/login';
import { AlertsService } from './alert.service';
import { delay, finalize, map, of } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
} )

export class AuthService {

    authUser: User | null = null

    constructor(private router: Router, private alertService: AlertsService, private loadingService: LoadingService) {}

    login(data: LoginData): void {
        const MOCK_USER = {
           id: 3,
            firstName: 'Luis',
            lastName: 'Benedeti',
            documentID: '12345',
            email: 'bene@gmail.com',
            password: '12345',
            role: 'ADMIN', 
        }
        if (
            data.email === MOCK_USER.email &&
            data.password === MOCK_USER.password
        ) {
            this.authUser = MOCK_USER;
            localStorage.setItem(
                'token',
                'lkjhgfdsaqwertyuiop'
            );
            this.router.navigate(['dashboard/home'])
        } else {
            this.alertService.showError('Email o Contraseña inválidos')
        }        
    }
    logout(): void{
        this.authUser = null;
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }
    verifyToken() {
        this.loadingService.setIsLoading(true);
        return of(localStorage.getItem('token')).pipe(delay(1000), map((response)=> !!response), finalize(() => this.loadingService.setIsLoading(false)));
    }
}
