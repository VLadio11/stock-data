import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockKeyInfoComponent } from './stock-key-info.component';

describe('StockKeyInfoComponent', () => {
  let component: StockKeyInfoComponent;
  let fixture: ComponentFixture<StockKeyInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockKeyInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockKeyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
