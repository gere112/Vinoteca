import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOMAINENICOGRANDPEREComponent } from './domaine-nico-grand-pere.component';

describe('DOMAINENICOGRANDPEREComponent', () => {
  let component: DOMAINENICOGRANDPEREComponent;
  let fixture: ComponentFixture<DOMAINENICOGRANDPEREComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOMAINENICOGRANDPEREComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DOMAINENICOGRANDPEREComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
