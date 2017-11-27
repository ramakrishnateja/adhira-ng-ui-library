import { SelectionItem } from './selection-item';

export class SelectableItem<T> extends SelectionItem<T> {
  constructor(value: T, displayName: string) {
    super(value, displayName);
  }

  isSelected: boolean;
}
