import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsIcon2Component } from './goals-icon-2.component';

describe('GoalsIcon2Component', () => {
  let component: GoalsIcon2Component;
  let fixture: ComponentFixture<GoalsIcon2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsIcon2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsIcon2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
