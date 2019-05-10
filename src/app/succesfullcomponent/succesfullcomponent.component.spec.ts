import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfullcomponentComponent } from './succesfullcomponent.component';

describe('SuccesfullcomponentComponent', () => {
  let component: SuccesfullcomponentComponent;
  let fixture: ComponentFixture<SuccesfullcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesfullcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfullcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
