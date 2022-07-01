import { TestBed } from '@angular/core/testing';

import { ListeFormationsService } from './liste-formations.service';

describe('ListeFormationsService', () => {
  let service: ListeFormationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeFormationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
