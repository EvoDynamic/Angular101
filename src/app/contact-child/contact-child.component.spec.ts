import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChildComponent } from './contact-child.component';

describe('ContactChildComponent', () => {
  let component: ContactChildComponent;
  let fixture: ComponentFixture<ContactChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
