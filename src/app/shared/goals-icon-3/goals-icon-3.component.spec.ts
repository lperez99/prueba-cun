import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsIcon3Component } from './goals-icon-3.component';

describe('GoalsIcon3Component', () => {
  let component: GoalsIcon3Component;
  let fixture: ComponentFixture<GoalsIcon3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsIcon3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsIcon3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
