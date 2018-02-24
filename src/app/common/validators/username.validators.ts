import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') !== -1)
            return {
                cannotContainSpace: true
            };

        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                if (control.value === 'hemant') {
                    resolve({
                        usernameTaken: true
                    });
                    console.log(control.value)
                } else {
                    console.log('In else ', control.value)

                    resolve(null);
                }
            }, 2000);
        });
    }
}