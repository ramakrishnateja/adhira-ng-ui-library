import { SelectableItem } from './../../models/selectable-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bs-radio-buttons',
  templateUrl: './bs-radio-buttons.component.html',
  styleUrls: ['./bs-radio-buttons.component.css']
})
export class BsRadioButtonsComponent implements OnInit {

  @Input() options: Array<SelectableItem<any>>;
  @Output() selectionChanged: EventEmitter<SelectableItem<any>>;
  selectedOption: any;
  selectedClassName: string;
  defaultClassName: string;
  constructor() { }

  onOptionSelected(option: SelectableItem<any>) {
    this.options.forEach(o => o.isSelected = false);
    option.isSelected = true;
    if (this.selectionChanged) {
      this.selectionChanged.emit(option);
    }
  }

  ngOnInit() {
  }

}
