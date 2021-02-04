import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundPreviewComponent } from './background-preview.component';

describe('BackgroundPreviewComponent', () => {
  let component: BackgroundPreviewComponent;
  let fixture: ComponentFixture<BackgroundPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
