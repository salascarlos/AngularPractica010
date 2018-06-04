import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaSegunComponent } from './directiva-segun.component';

describe('DirectivaSegunComponent', () => {
  let component: DirectivaSegunComponent;
  let fixture: ComponentFixture<DirectivaSegunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaSegunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaSegunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
