import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallonIconComponent } from './ballon-icon.component';

describe('BallonIconComponent', () => {
  let component: BallonIconComponent;
  let fixture: ComponentFixture<BallonIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BallonIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallonIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
