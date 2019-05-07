import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTechnicalComponent } from './stock-technical.component';

describe('StockTechnicalComponent', () => {
  let component: StockTechnicalComponent;
  let fixture: ComponentFixture<StockTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
