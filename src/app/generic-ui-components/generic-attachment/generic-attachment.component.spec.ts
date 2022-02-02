import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAttachmentComponent } from './generic-attachment.component';

describe('GenericAttachmentComponent', () => {
  let component: GenericAttachmentComponent;
  let fixture: ComponentFixture<GenericAttachmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericAttachmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericAttachmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
