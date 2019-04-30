import { TestBed } from '@angular/core/testing';

import { YoutubeRequestService } from './youtube-request.service';

describe('YoutubeRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YoutubeRequestService = TestBed.get(YoutubeRequestService);
    expect(service).toBeTruthy();
  });
});
