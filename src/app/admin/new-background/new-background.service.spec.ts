import { TestBed } from '@angular/core/testing';

import { NewBackgroundService } from './new-background.service';

describe('NewBackgroundService', () => {
  let service: NewBackgroundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewBackgroundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
