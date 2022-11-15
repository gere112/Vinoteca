import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerServiceComponent } from './banner-service.component';

describe('BannerServiceComponent', () => {
  let component: BannerServiceComponent;
  let fixture: ComponentFixture<BannerServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
