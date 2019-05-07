import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBuildComponent } from './link-build.component';

describe('LinkBuildComponent', () => {
  let component: LinkBuildComponent;
  let fixture: ComponentFixture<LinkBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
