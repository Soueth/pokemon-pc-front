import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingContentComponent } from './landing-content.component';
import { CommonTesting } from 'src/app/common/constants';

describe('LandingContentComponent', () => {
  let component: LandingContentComponent;
  let fixture: ComponentFixture<LandingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingContentComponent],
      providers: CommonTesting.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
