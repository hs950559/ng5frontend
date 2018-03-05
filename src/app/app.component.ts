import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = environment.appName;
  navbarBg = environment.navbarColor;

  constructor(public authService: AuthService) {
    // this.myTest();
  }
}
