import { SelectableItem } from './../../models/selectable-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bs-radio-buttons',
  templateUrl: './bs-radio-buttons.component.html',
  styleUrls: ['./bs-radio-buttons.component.css']
})
export class BsRadioButtonsComponent implements OnInit {

  @Input() options: Array<SelectableItem<any>>;
  @Input() selectedOption: any;
  @Input() selectedClassName: string;
  @Input() defaultClassName: string;
  @Output() optionChanged = new EventEmitter<SelectableItem<any>>();
  constructor() { }

  onOptionSelected(option: SelectableItem<any>) {
    this.options.forEach(o => o.isSelected = false);
    option.isSelected = true;
    this.selectedOption = option;
    if (this.optionChanged) {
      this.optionChanged.emit(option);
    }
  }

  ngOnInit() {
  }

}
