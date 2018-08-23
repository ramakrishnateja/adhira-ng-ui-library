import { ReferenceDataService } from './services/referencedataservice.service';
import { SelectableItem } from './models/selectable-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  applicationTypeCategories: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();
  countries: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();
  selectedCountries: string[] = ['US', 'IND'];
  areaType = 'indoor';
  selectedApplicationType: string;
  indoorApplicationTypes: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();
  outdoorApplicationTypes: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();
  manufacturers: Array<SelectableItem<string>> = new Array<SelectableItem<string>>();

  constructor(private referenceDataService: ReferenceDataService) {
    this.loadApplicationTypeCategories();

    this.countries.push(new SelectableItem<string>('US', 'USA'));
    this.countries.push(new SelectableItem<string>('IND', 'INDIA'));
    this.countries.push(new SelectableItem<string>('SL', 'SRILANKA'));
    this.countries.push(new SelectableItem<string>('SA', 'SOUTHAFRICA'));
    const eng = new SelectableItem<string>('ENG', 'ENGLAND');
    eng.isSelected = true;
    this.countries.push(eng);
  }

  ngOnInit() {
    this.referenceDataService.loadApplicationTypes(() => {
      this.referenceDataService.getIndoorApplicationTypes().forEach(iat => {
        this.indoorApplicationTypes.push(new SelectableItem<string>(iat.value, iat.displayName));
      });

      this.referenceDataService.getOutDoorApplicationTypes().forEach(oat => {
        this.outdoorApplicationTypes.push(new SelectableItem<string>(oat.value, oat.displayName));
      });
    });
  }

  loadApplicationTypeCategories(): void {
    const indoor: SelectableItem<string> = new SelectableItem<string>('indoor', 'Indoor');
    this.applicationTypeCategories.push(indoor);
    this.applicationTypeCategories.push(new SelectableItem<string>('outdoor', 'Outdoor'));
  }

  applicationTypeCategorySelectionChanged(category: SelectableItem<string>): void {
    this.areaType = category.value;
    if (this.selectedApplicationType) {
      this.selectedApplicationType = null;
    }
  }

  onApplicationTypeSelectionChanged(applicationType: SelectableItem<string>): void {
    this.manufacturers.splice(0, this.manufacturers.length);
    this.referenceDataService.getManufacturers(applicationType.value)
      .subscribe(result => {
        result.forEach(m => this.manufacturers.push(new SelectableItem<string>(m.value, m.displayName)));
      });
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
