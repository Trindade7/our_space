import { TestBed } from '@angular/core/testing';

import { CustomizeCardService } from './customize-card.service';

describe('CustomizeCardService', () => {
  let service: CustomizeCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomizeCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
