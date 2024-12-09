import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLoginComponent } from './top-login.component';

describe('TopLoginComponent', () => {
  let component: TopLoginComponent;
  let fixture: ComponentFixture<TopLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
