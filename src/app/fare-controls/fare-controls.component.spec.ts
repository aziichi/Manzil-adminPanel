import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareControlsComponent } from './fare-controls.component';

describe('FareControlsComponent', () => {
  let component: FareControlsComponent;
  let fixture: ComponentFixture<FareControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FareControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FareControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
