import { TestBed } from '@angular/core/testing';

import { MemoHttpService } from './memo-http.service';

describe('MemoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoHttpService = TestBed.get(MemoHttpService);
    expect(service).toBeTruthy();
  });
});
