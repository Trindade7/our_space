import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBackgroundComponent } from './new-background.component';

describe('NewBackgroundComponent', () => {
  let component: NewBackgroundComponent;
  let fixture: ComponentFixture<NewBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
