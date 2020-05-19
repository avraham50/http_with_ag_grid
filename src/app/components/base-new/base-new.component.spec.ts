import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNewComponent } from './base-new.component';

describe('BaseNewComponent', () => {
  let component: BaseNewComponent;
  let fixture: ComponentFixture<BaseNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
