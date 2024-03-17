import { Injectable } from '@angular/core';
import { User } from '../../layouts/auth/pages/login/models';
import { Router } from '@angular/router';

@Injectable(
   {
  providedIn: 'root'
} )

export class AuthService {

    authUser: User | null = null

    constructor(private router: Router) {}

    login(): void {
        this.authUser= {
            id: 3,
            firstName: 'Luis',
            lastName: 'Benedeti',
            documentID: '12345',
            email: 'bene@getMaxListeners.com',
            password: '12345',
            role: 'Admin',
        }
        this.router.navigate(['dashboard/home'])
    }
    
}
