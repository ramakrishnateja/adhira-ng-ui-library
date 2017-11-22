import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsRadioButtonsComponent } from './bs-radio-buttons.component';

describe('BsRadioButtonsComponent', () => {
  let component: BsRadioButtonsComponent;
  let fixture: ComponentFixture<BsRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
