import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscomponentsComponent } from './detailscomponents.component';

describe('DetailscomponentsComponent', () => {
  let component: DetailscomponentsComponent;
  let fixture: ComponentFixture<DetailscomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailscomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
