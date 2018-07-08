import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PodcastEffects } from './podcast.effects';
import { FeederService } from '../podcast/feeder.service';

describe('PodcastService', () => {
  let actions$: Observable<any>;
  let effects: PodcastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [PodcastEffects, FeederService, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(PodcastEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
