import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoBindiadoComponent } from './evento-bindiado.component';

describe('EventoBindiadoComponent', () => {
  let component: EventoBindiadoComponent;
  let fixture: ComponentFixture<EventoBindiadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoBindiadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoBindiadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
