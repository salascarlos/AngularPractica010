import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleBindingComponent } from './doble-binding.component';

describe('DobleBindingComponent', () => {
  let component: DobleBindingComponent;
  let fixture: ComponentFixture<DobleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DobleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DobleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
