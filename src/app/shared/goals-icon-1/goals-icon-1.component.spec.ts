import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsIcon1Component } from './goals-icon-1.component';

describe('GoalsIcon1Component', () => {
  let component: GoalsIcon1Component;
  let fixture: ComponentFixture<GoalsIcon1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsIcon1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsIcon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
