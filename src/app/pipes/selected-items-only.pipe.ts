import { Pipe, PipeTransform } from '@angular/core';
import { SelectableItem } from '../../public_api';

@Pipe({
  name: 'selectedItemsOnly'
})
export class SelectedItemsOnlyPipe implements PipeTransform {

  transform(value: Array<SelectableItem<any>>, args?: any): any {
    return value.filter(i => i.isSelected);
  }

}
