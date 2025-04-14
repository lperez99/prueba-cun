import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageShadowComponent } from './image-shadow.component';

describe('ImageShadowComponent', () => {
  let component: ImageShadowComponent;
  let fixture: ComponentFixture<ImageShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageShadowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
