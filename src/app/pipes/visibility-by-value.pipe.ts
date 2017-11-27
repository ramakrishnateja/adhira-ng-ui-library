import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visibilityByValue',
  pure: true
})
export class VisibilityByValuePipe implements PipeTransform {

  transform(value: any, allowedValues: any[]): any {
    if (allowedValues.length > 0) {
      return allowedValues.indexOf(value) !== -1;
    }

    if (value) {
      return true;
    }

    return false;
  }

}
