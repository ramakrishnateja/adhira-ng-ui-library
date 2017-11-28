import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BsCheckButtonsComponent } from './bs-check-buttons.component';

describe('BsCheckButtonsComponent', () => {
  let component: BsCheckButtonsComponent;
  let fixture: ComponentFixture<BsCheckButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BsCheckButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BsCheckButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
