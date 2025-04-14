import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsIcon4Component } from './goals-icon-4.component';

describe('GoalsIcon4Component', () => {
  let component: GoalsIcon4Component;
  let fixture: ComponentFixture<GoalsIcon4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsIcon4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsIcon4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
