import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigSettingsComponent } from './pig-settings.component';

describe('PigSettingsComponent', () => {
  let component: PigSettingsComponent;
  let fixture: ComponentFixture<PigSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
