import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignSideComponent } from './sign-side.component';
import { CommonTesting } from 'src/app/common/constants';

describe('SignSideComponent', () => {
  let component: SignSideComponent;
  let fixture: ComponentFixture<SignSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignSideComponent],
      providers: CommonTesting.providers
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
