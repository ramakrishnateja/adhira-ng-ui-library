import { SelectableItem } from './../../models/selectable-item';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bs-radio-buttons',
  templateUrl: './bs-radio-buttons.component.html',
  styleUrls: ['./bs-radio-buttons.component.css']
})
export class BsRadioButtonsComponent implements OnInit, OnChanges {
  @Input() options: Array<SelectableItem<any>> = [];
  @Input() selectedValue: any;
  @Input() selectedClassName: string;
  @Input() defaultClassName: string;
  @Output() optionChanged = new EventEmitter<SelectableItem<any>>();
  @Output() selectedValueChange = new EventEmitter<any>();

  constructor() { }

  onOptionSelected(option: SelectableItem<any>) {
    this.options.forEach(o => o.isSelected = false);
    option.isSelected = true;
    this.setSelectedValue(option.value);
    if (this.optionChanged) {
      this.optionChanged.emit(option);
    }
  }

  setSelectedValue(selectedValue: any): void {
    this.selectedValue = selectedValue;
    if (this.selectedValueChange) {
      this.selectedValueChange.emit(selectedValue);
    }
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName && (propName === 'options' || propName === 'selectedValue')) {
        this.handleSelectedOption(this.selectedValue, this.options);
      }
    }
  }

  handleSelectedOption(selectedOption: any, options: Array<SelectableItem<any>>) {
    if (selectedOption && options && options.length > 0) {
      const option = options.find(o => o.value === selectedOption);
      if (option) {
        option.isSelected = true;
      } else {
        this.clearSelections();
      }
    } else if (options && options.length > 0) {
      this.clearSelections();
    }
  }

  clearSelections(): void {
    this.options.forEach(o => o.isSelected = false);
  }
}
