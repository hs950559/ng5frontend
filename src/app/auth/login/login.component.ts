import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  invalidLogin = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  signIn(credentials){
     this.authService.login(credentials)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/']);
        } else {
          this.invalidLogin = true;
        }
      });
  }
}
