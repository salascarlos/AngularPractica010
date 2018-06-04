import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayObjetosComponent } from './array-objetos.component';

describe('ArrayObjetosComponent', () => {
  let component: ArrayObjetosComponent;
  let fixture: ComponentFixture<ArrayObjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayObjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
