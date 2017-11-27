export class SelectionItem<T> {
  constructor(value: T, displayName: string) {
    this.value = value;
    this.displayName = displayName;
  }

  value: T;
  displayName: string;
}
