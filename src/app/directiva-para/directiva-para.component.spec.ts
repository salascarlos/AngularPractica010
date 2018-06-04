import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivaParaComponent } from './directiva-para.component';

describe('DirectivaParaComponent', () => {
  let component: DirectivaParaComponent;
  let fixture: ComponentFixture<DirectivaParaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivaParaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivaParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
