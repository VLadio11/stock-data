import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockShortsComponent } from './stock-shorts.component';

describe('StockShortsComponent', () => {
  let component: StockShortsComponent;
  let fixture: ComponentFixture<StockShortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockShortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockShortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
