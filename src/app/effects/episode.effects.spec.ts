import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EpisodeEffects } from './episode.effects';
import { FeederService } from '../podcast/feeder.service';

describe('EpisodeService', () => {
  let actions$: Observable<any>;
  let effects: EpisodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [EpisodeEffects, FeederService, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(EpisodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
