import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../../common/validators/username.validators';

@Component({
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss']
})
export class MdfComponent implements OnInit {
  mdfForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.mdfForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$'), UsernameValidators.cannotContainSpace], UsernameValidators.shouldBeUnique),
      email: new FormControl('', [Validators.required, Validators.email]),
      pwd: new FormControl(''),
      address: new FormGroup({
        primary: new FormControl('', Validators.required),
        secondary: new FormControl(''),
      })
    });
  }

  get username() {
    return this.mdfForm.get('username');
  }

  get email() {
    return this.mdfForm.get('email');
  }

  get primary() {
    return this.mdfForm.get('address.primary');
  }

  onmdfSubmit() {
    this.mdfForm.setErrors({
      invalidLogin: true
    });
    setTimeout(() => {
      this.mdfForm.setErrors(null);
    }, 2000);
    console.log(this.mdfForm.value);
  }
}
