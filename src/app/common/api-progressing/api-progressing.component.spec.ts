import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiProgressingComponent } from './api-progressing.component';

describe('ApiProgressingComponent', () => {
  let component: ApiProgressingComponent;
  let fixture: ComponentFixture<ApiProgressingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiProgressingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiProgressingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
