import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorCepasComponent } from './por-cepas.component';

describe('PorCepasComponent', () => {
  let component: PorCepasComponent;
  let fixture: ComponentFixture<PorCepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorCepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorCepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
