import { SelectableItem } from './models/selectable-item';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  applicationTypeCategories: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();
  countries: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();
  selectedCountries: string[] = ['US', 'IND'];
  areaType = 'indoor';
  constructor() {
    this.applicationTypeCategories.push(new SelectableItem<string>('indoor', 'Indoor'));
    this.applicationTypeCategories.push(new SelectableItem<string>('outdoor', 'Outdoor'));
    this.applicationTypeCategories.push(new SelectableItem<string>('extraTerrestrial', 'E.T'));

    this.countries.push(new SelectableItem<string>('US', 'USA'));
    this.countries.push(new SelectableItem<string>('IND', 'INDIA'));
    this.countries.push(new SelectableItem<string>('SL', 'SRILANKA'));
    this.countries.push(new SelectableItem<string>('SA', 'SOUTHAFRICA'));
    const eng = new SelectableItem<string>('ENG', 'ENGLAND');
    eng.isSelected = true;
    this.countries.push(eng);
  }

  applicationTypeCategorySelectionChanged(category: SelectableItem<string>): void {
    // this.areaType = category.value;
  }

  clearSelection(): void {
    this.areaType = '';
    this.selectedCountries = [];
  }

  displaySelectedAreaType(): void {
    console.log(this.areaType);
    console.log(JSON.stringify(this.selectedCountries));
  }
}
