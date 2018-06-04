import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaStyleComponent } from './directiva-style.component';

describe('DirectivaStyleComponent', () => {
  let component: DirectivaStyleComponent;
  let fixture: ComponentFixture<DirectivaStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
