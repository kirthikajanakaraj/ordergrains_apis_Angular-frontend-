import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcomponentsComponent } from './paymentcomponents.component';

describe('PaymentcomponentsComponent', () => {
  let component: PaymentcomponentsComponent;
  let fixture: ComponentFixture<PaymentcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
