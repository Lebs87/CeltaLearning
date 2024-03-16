import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationErrors'
})
export class ValidationErrorsPipe implements PipeTransform {

  transform(errors?: ValidationErrors | null, ...args: unknown[]): unknown {

    if (!!errors) {
      
      let menssages = [];
      if (errors['email']) menssages.push('El email no es válido');
      if (errors['required']) menssages.push('Debe completar este campo');
      if (errors['maxlength']) menssages.push(`No puede superar ${errors['maxlength']?.requiredLength} caracteres`);

      return menssages.join('. ') + '.'
    }
    return null;
  }

}
