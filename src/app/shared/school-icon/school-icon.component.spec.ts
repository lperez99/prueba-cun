import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolIconComponent } from './school-icon.component';

describe('SchoolIconComponent', () => {
  let component: SchoolIconComponent;
  let fixture: ComponentFixture<SchoolIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
