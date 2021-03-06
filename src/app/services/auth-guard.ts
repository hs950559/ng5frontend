import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route, state: RouterStateSnapshot) {
    if (this.authService.isLoggedin()) {
      return true;
    }

    this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url}});
    return false;
  }
}
