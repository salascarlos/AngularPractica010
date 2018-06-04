import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaClassComponent } from './directiva-class.component';

describe('DirectivaClassComponent', () => {
  let component: DirectivaClassComponent;
  let fixture: ComponentFixture<DirectivaClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
