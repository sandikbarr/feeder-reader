import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EpisodeEffects } from './episode.effects';

describe('EpisodeService', () => {
  let actions$: Observable<any>;
  let effects: EpisodeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EpisodeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(EpisodeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
