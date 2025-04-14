import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalImageComponent } from './principal-image.component';

describe('PrincipalImageComponent', () => {
  let component: PrincipalImageComponent;
  let fixture: ComponentFixture<PrincipalImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
