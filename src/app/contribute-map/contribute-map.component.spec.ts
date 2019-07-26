import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeMapComponent } from './contribute-map.component';

describe('ContributeMapComponent', () => {
  let component: ContributeMapComponent;
  let fixture: ComponentFixture<ContributeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
