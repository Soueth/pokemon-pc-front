import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesFiltersComponent } from './boxes-filters.component';

describe('BoxesFiltersComponent', () => {
  let component: BoxesFiltersComponent;
  let fixture: ComponentFixture<BoxesFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxesFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxesFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
