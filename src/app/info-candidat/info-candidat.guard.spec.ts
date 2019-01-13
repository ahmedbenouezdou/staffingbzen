import { TestBed, async, inject } from '@angular/core/testing';

import { InfoCandidatGuard } from './info-candidat.guard';

describe('InfoCandidatGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoCandidatGuard]
    });
  });

  it('should ...', inject([InfoCandidatGuard], (guard: InfoCandidatGuard) => {
    expect(guard).toBeTruthy();
  }));
});
