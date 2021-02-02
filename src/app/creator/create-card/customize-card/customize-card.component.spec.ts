import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeCardComponent } from './customize-card.component';

describe('CustomizeCardComponent', () => {
  let component: CustomizeCardComponent;
  let fixture: ComponentFixture<CustomizeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
