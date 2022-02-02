import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalPopupComponent } from './generic-modal-popup.component';

describe('GenericModalPopupComponent', () => {
  let component: GenericModalPopupComponent;
  let fixture: ComponentFixture<GenericModalPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericModalPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericModalPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
