import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailscomponentComponent } from './productdetailscomponent.component';

describe('ProductdetailscomponentComponent', () => {
  let component: ProductdetailscomponentComponent;
  let fixture: ComponentFixture<ProductdetailscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
