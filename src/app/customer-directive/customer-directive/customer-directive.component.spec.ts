import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDirectiveComponent } from './customer-directive.component';

describe('CustomerDirectiveComponent', () => {
  let component: CustomerDirectiveComponent;
  let fixture: ComponentFixture<CustomerDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerDirectiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
