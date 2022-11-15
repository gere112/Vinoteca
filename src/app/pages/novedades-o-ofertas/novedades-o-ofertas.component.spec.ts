import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesOOfertasComponent } from './novedades-o-ofertas.component';

describe('NovedadesOOfertasComponent', () => {
  let component: NovedadesOOfertasComponent;
  let fixture: ComponentFixture<NovedadesOOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovedadesOOfertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesOOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
