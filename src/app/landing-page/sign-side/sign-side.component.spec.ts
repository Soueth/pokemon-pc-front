import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignSideComponent } from './sign-side.component';

describe('SignSideComponent', () => {
  let component: SignSideComponent;
  let fixture: ComponentFixture<SignSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignSideComponent]
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
