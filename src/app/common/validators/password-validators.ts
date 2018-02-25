import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            setTimeout(function () {
                if (control.value !== '123') {
                    resolve({
                        invalidPassword: true
                    });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static passwordsShouldMatch(control: AbstractControl) {
      const newPassword = control.get('newPassword');
      const confirmPassword = control.get('confirmPassword');
        if (confirmPassword.value && (newPassword.value !== confirmPassword.value)) {
            return {
              passwordsShouldMatch: true
            };
        }
        return null;
    }
}
