export class SelectableItem<T> {
  constructor(value: T, displayName: string) {
    this.value = value;
    this.displayName = displayName;
  }

  value: T;
  displayName: string;
  isSelected: boolean;
}
