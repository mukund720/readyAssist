import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAfterdivListComponent } from './generic-afterdiv-list.component';

describe('GenericAfterdivListComponent', () => {
  let component: GenericAfterdivListComponent;
  let fixture: ComponentFixture<GenericAfterdivListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericAfterdivListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericAfterdivListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
