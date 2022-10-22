import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PigCardComponent } from './pig-card.component';

describe('PigCardComponent', () => {
  let component: PigCardComponent;
  let fixture: ComponentFixture<PigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
