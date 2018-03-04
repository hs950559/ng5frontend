import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(route, state: RouterStateSnapshot) {
    const user = this.authService.currentUser;

    if ( user && user.admin ) {
      return true;
    }

    this.router.navigate(['no-access']);
    return false;
  }
}
