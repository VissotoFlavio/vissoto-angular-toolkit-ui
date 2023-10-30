import { ApplicationRef } from '@angular/core';
import { BodyInjectorService } from './body-injector.service';
import { TestBed } from '@angular/core/testing';

describe('BodyInjectorService', () => {
  let service: BodyInjectorService;
  let appRef: ApplicationRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodyInjectorService, ApplicationRef],
    }).compileComponents();

    service = TestBed.inject(BodyInjectorService);
    appRef = TestBed.inject(ApplicationRef);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('should create', () => {
    expect(BodyInjectorService).toBeTruthy();
  });
});
