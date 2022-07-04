import { TestBed } from '@angular/core/testing';

import { ListeAssistantsService } from './liste-assistants.service';

describe('ListeAssistantsService', () => {
  let service: ListeAssistantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeAssistantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
