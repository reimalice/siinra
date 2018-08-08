import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNuevoParametroComponent } from './dialog-nuevo-parametro.component';

describe('DialogNuevoParametroComponent', () => {
  let component: DialogNuevoParametroComponent;
  let fixture: ComponentFixture<DialogNuevoParametroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogNuevoParametroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogNuevoParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
