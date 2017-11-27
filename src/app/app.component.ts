import { SelectableItem } from './models/selectable-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationTypeCategories: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();
  areaType = 'indoor';
  constructor() {
    this.applicationTypeCategories.push(new SelectableItem<string>('indoor', 'Indoor'));
    this.applicationTypeCategories.push(new SelectableItem<string>('outdoor', 'Outdoor'));
    this.applicationTypeCategories.push(new SelectableItem<string>('extraTerrestrial', 'E.T'));
  }

  applicationTypeCategorySelectionChanged(category: SelectableItem<string>): void {
    // this.areaType = category.value;
  }

  clearSelection(): void {
    this.areaType = '';
  }

  displaySelectedAreaType(): void {
    console.log(this.areaType);
  }
}
