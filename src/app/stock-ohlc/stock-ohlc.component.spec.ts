import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOhlcComponent } from './stock-ohlc.component';

describe('StockOhlcComponent', () => {
  let component: StockOhlcComponent;
  let fixture: ComponentFixture<StockOhlcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockOhlcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOhlcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
