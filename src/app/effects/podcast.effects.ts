import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, startWith } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  PodcastActions,
  PodcastActionTypes,
  LoadPodcasts,
  LoadPodcastsSuccess,
  LoadPodcastsFailure
} from '../actions/podcast.actions';
import { FeederService } from '../podcast/feeder.service';
import { Podcast } from '../models';

@Injectable()
export class PodcastEffects {
  @Effect()
  loadPodcasts$: Observable<Action> = this.actions$.pipe(
    ofType(PodcastActionTypes.LoadPodcasts),
    startWith(new LoadPodcasts()), // to trigger the effect immediately on start up and hydrate your app
    switchMap((action: LoadPodcasts) => {
      return this.feederService.getPodcasts().pipe(
        map((podcasts: Podcast[]) => new LoadPodcastsSuccess({ podcasts })),
        catchError(error => of(new LoadPodcastsFailure(error)))
      );
    })
  );

  constructor(private actions$: Actions, private feederService: FeederService) {}
}
