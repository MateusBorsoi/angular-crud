import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordMismatchValidator(
  password: string,
  confirmPassword: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirmPassword);
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }
    const passwordValue = passwordControl.value;
    const confirmPassWordValue = confirmPasswordControl.value;

    return passwordValue === confirmPassWordValue
      ? null
      : { passwordMismatch: true };
  };
}
