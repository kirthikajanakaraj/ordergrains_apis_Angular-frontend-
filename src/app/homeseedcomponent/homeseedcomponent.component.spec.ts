import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeseedcomponentComponent } from './homeseedcomponent.component';

describe('HomeseedcomponentComponent', () => {
  let component: HomeseedcomponentComponent;
  let fixture: ComponentFixture<HomeseedcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeseedcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeseedcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
