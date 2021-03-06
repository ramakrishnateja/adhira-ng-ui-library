import { SelectableItem } from './../../models/selectable-item';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bs-check-buttons',
  templateUrl: './bs-check-buttons.component.html',
  styleUrls: ['./bs-check-buttons.component.css']
})
export class BsCheckButtonsComponent implements OnInit, OnChanges {

  @Input() options: Array<SelectableItem<any>>;
  @Input() selectedValues: any[] = [];
  @Input() selectedClassName: string;
  @Input() defaultClassName: string;
  @Output() optionChanged = new EventEmitter<SelectableItem<any>>();
  @Output() selectedValuesChange = new EventEmitter<any[]>();
  constructor() { }

  onOptionSelected(option: SelectableItem<any>) {
    option.isSelected = !option.isSelected;
    this.updateSelectedValues(option);
    if (this.optionChanged) {
      this.optionChanged.emit(option);
    }
  }

  updateSelectedValues(option: SelectableItem<any>): void {
    if (option.isSelected) {
      this.selectedValues.push(option.value);
    } else {
      const index = this.selectedValues.indexOf(option.value);
      this.selectedValues.splice(index, 1);
    }

    if (this.selectedValuesChange) {
      this.selectedValuesChange.emit(this.selectedValues);
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName && (propName === 'options' || propName === 'selectedValues')) {
        this.handleSelectedOption();
      }
    }
  }

  handleSelectedOption() {
    if (this.options) {
      this.options.forEach(o => {
        if (o.isSelected && this.selectedValues.indexOf(o.value) === -1) {
          this.selectedValues.push(o.value);
        }
      });
    }

    if (this.selectedValues && this.selectedValues.length > 0 && this.options && this.options.length > 0) {
      this.options.forEach(o => o.isSelected = this.selectedValues.indexOf(o.value) !== -1);
    } else if (this.options && this.options.length > 0) {
      this.clearSelections();
    }
  }

  clearSelections(): void {
    this.selectedValues = [];
    this.options.forEach(o => o.isSelected = false);
  }
}
