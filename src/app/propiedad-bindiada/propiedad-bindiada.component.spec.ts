import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadBindiadaComponent } from './propiedad-bindiada.component';

describe('PropiedadBindiadaComponent', () => {
  let component: PropiedadBindiadaComponent;
  let fixture: ComponentFixture<PropiedadBindiadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropiedadBindiadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadBindiadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
