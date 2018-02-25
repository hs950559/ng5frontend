import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { UsernameValidators } from '../../common/validators/username.validators';

@Component({
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss']
})
export class MdfComponent implements OnInit {
  mdfForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.mdfForm = fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[A-Za-zs]{1,}[.]{0,1}[A-Za-zs]{0,}$'),
          UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique
      ],
      email: ['', [Validators.required, Validators.email]],
      pwd: [],
      address: fb.group({
        primary: ['', Validators.required],
        secondary: []
      }),
      skills: fb.array([])
    });
  }

  ngOnInit() {
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

  get skills() {
    return this.mdfForm.get('skills') as FormArray;
  }

  addSkill(skill: HTMLInputElement) {
    this.skills.push(new FormControl(skill.value));
    skill.value = '';
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
