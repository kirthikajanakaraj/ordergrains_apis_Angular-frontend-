import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartpagecomponentComponent } from './cartpagecomponent.component';

describe('CartpagecomponentComponent', () => {
  let component: CartpagecomponentComponent;
  let fixture: ComponentFixture<CartpagecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartpagecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartpagecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
