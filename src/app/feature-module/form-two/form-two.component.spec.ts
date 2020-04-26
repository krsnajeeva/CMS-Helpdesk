import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoComponent } from './form-two.component';

describe('HomeComponent', () => {
  let component: FormTwoComponent;
  let fixture: ComponentFixture<FormTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormTwoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});