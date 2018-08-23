import { TestBed, inject } from '@angular/core/testing';

import { ReferencedataserviceService } from './referencedataservice.service';

describe('ReferencedataserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferencedataserviceService]
    });
  });

  it('should be created', inject([ReferencedataserviceService], (service: ReferencedataserviceService) => {
    expect(service).toBeTruthy();
  }));
});
