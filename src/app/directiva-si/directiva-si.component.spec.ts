import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaSiComponent } from './directiva-si.component';

describe('DirectivaSiComponent', () => {
  let component: DirectivaSiComponent;
  let fixture: ComponentFixture<DirectivaSiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaSiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
