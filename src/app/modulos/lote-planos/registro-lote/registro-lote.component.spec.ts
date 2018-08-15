import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLoteComponent } from './registro-lote.component';

describe('RegistroLoteComponent', () => {
  let component: RegistroLoteComponent;
  let fixture: ComponentFixture<RegistroLoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroLoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
