import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLinkComponent } from './news-link.component';

describe('NewsLinkComponent', () => {
  let component: NewsLinkComponent;
  let fixture: ComponentFixture<NewsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
