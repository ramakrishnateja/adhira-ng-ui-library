import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SelectionItem } from '../models/selection-item';

@Injectable()
export class ReferenceDataService {
  private referenceData: any[] = [];
  private indoorApplicationTypes: SelectionItem<string>[];
  private outdoorApplicationTypes: SelectionItem<string>[];
  private readonly _baseUrl: string = 'http://localhost:3300';
  private _baseHeaders: Headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private _http: Http) {
  }

  loadApplicationTypes(onApplicationTypesLoaded: () => void) {
    this.getById<any>(`${this._baseUrl}/applicationTypes`)
      .subscribe(response => {
        this.indoorApplicationTypes = response.interior;
        this.outdoorApplicationTypes = response.exterior;
        onApplicationTypesLoaded();
      });
  }

  loadReferenceData(applicationType: string, onReferenceDataLoaded: () => void): void {
    if (this.referenceData.findIndex(r => r.applicationType === applicationType) === -1) {
      this.getById(`${this._baseUrl}/applicationTypes/${applicationType}`).subscribe(response => {
        this.referenceData.push(response);
        onReferenceDataLoaded();
      });
    } else {
      onReferenceDataLoaded();
    }
  }

  getIndoorApplicationTypes(): SelectionItem<string>[] {
    return this.indoorApplicationTypes;
  }

  getOutDoorApplicationTypes(): SelectionItem<string>[] {
    return this.outdoorApplicationTypes;
  }

  getManufacturers(applicationType: string): Observable<SelectionItem<string>[]> {
    return this.getAll(`${this._baseUrl}/${applicationType}/manufacturers`);
  }

  getFromReferenceData<T>(applicationType, memberName): SelectionItem<T>[] {
    const applicationTypeData: any = this.referenceData.find(x => x.applicationType === applicationType);
    const elements: SelectionItem<T>[] = applicationTypeData[memberName] as SelectionItem<T>[];
    return elements;
  }

  private isIndoorApplicationType(applicationType): boolean {
    return this.indoorApplicationTypes.find(a => a.value === applicationType) !== null;
  }

  private isOutdoorApplicationType(applicationType): boolean {
    return this.outdoorApplicationTypes.find(a => a.value === applicationType) !== null;
  }

  private getAll<T>(url: string): Observable<T[]> {
    const options: RequestOptions = new RequestOptions({ headers: this._baseHeaders });
    return this._http.get(url, options).map(r => r.json());
  }

  private getById<T>(url: string): Observable<T> {
    const options: RequestOptions = new RequestOptions({ headers: this._baseHeaders });
    return this._http.get(url, options).map(this.extractData);
  }

  private extractArrayData(res: Response): Array<any> {
    const body: any = res.json();
    let retVal: Array<any> = [];
    if (body && body.data) {
      retVal = body.data;
    }

    return retVal;
  }

  private extractData(res: Response): any {
    const body: any = res.json();
    if (body) {
      if (body.data) {
        if (Array.isArray(body.data) && body.data.length > 0) {
          return body.data[0];
        } else {
          return body.data;
        }
      }

      return body;
    }

    return {};
  }
}

