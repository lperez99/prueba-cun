import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalImageComponent } from './metal-image.component';

describe('MetalImageComponent', () => {
  let component: MetalImageComponent;
  let fixture: ComponentFixture<MetalImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetalImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
