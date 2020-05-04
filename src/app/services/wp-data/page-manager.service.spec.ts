import { TestBed } from '@angular/core/testing';

import { PageMangerService } from './page-manger.service';

describe('PageManagerService', () => {
  let service: PageMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
