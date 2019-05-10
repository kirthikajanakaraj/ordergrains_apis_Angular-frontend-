import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedcatlogcomponentComponent } from './seedcatlogcomponent.component';

describe('SeedcatlogcomponentComponent', () => {
  let component: SeedcatlogcomponentComponent;
  let fixture: ComponentFixture<SeedcatlogcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedcatlogcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedcatlogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
