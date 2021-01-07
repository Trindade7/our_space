import { TestBed } from '@angular/core/testing';

import { CardsManagementService } from './cards-management.service';

describe('CardsManagementService', () => {
  let service: CardsManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
