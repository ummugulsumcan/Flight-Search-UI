import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'errorMessage'
})
export class ErrorMessagePipe implements PipeTransform {
  transform(control: AbstractControl | null, submitted: boolean): string | null {
    if (!control || !control.errors) return null;


    if (control.errors['required']) {
      return 'This field is required.';
    }

    if (control.errors['minlength']) {
      const requiredLength = control.errors['minlength'].requiredLength;
      return `Minimum ${requiredLength} characters required.`;
    }


    if (control.errors['email']) {
      return 'Invalid email format.';
    }


    if (control.errors['pattern']) {
      return 'Invalid input format.';
    }

    return null;
  }
}
