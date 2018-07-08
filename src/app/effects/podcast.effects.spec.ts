import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PodcastEffects } from './podcast.effects';

describe('PodcastService', () => {
  let actions$: Observable<any>;
  let effects: PodcastEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PodcastEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PodcastEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
