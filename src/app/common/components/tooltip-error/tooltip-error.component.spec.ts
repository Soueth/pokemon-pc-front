import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipErrorComponent } from './tooltip-error.component';

describe('TooltipErrorComponent', () => {
  let component: TooltipErrorComponent;
  let fixture: ComponentFixture<TooltipErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
