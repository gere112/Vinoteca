import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraEmpresaComponent } from './nuestra-empresa.component';

describe('NuestraEmpresaComponent', () => {
  let component: NuestraEmpresaComponent;
  let fixture: ComponentFixture<NuestraEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestraEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
