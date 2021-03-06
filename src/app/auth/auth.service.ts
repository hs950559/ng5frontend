import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authUrl = 'https://hkauthapi.herokuapp.com/users';

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  login(credentials) {
    return this.http.post(this.authUrl + '/signin', credentials)
    .pipe (
      map((res: any) => {
         if (res && res.token) {
          localStorage.setItem('token', res.token);
          return true;
         }

         return false;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  isLoggedin() {
    const token: string = localStorage.getItem('token');
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  get currentUser() {
    const token: string = localStorage.getItem('token');
    return token != null && this.jwtHelper.decodeToken(token);
  }
}
