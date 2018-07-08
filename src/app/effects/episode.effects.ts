import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { FeederService } from '../podcast/feeder.service';
import { PodcastActionTypes, LoadPodcastsSuccess } from '../actions/podcast.actions';
import {
  EpisodeActionTypes,
  AddEpisodes,
  AddEpisodesSuccess,
  AddEpisodesFailure
} from '../actions/episode.actions';
import { Podcast, Episode } from '../models';

@Injectable()
export class EpisodeEffects {
  constructor(private actions$: Actions, private feederService: FeederService) {}

  @Effect()
  loadPodcastsSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(PodcastActionTypes.LoadPodcastsSuccess),
    map((action: LoadPodcastsSuccess) => action.payload.podcasts),
    mergeMap((podcasts: Podcast[]) => {
      return podcasts.map((podcast: Podcast) => new AddEpisodes({ podcastId: podcast.id }));
    })
  );

  @Effect()
  addTags$: Observable<Action> = this.actions$.pipe(
    ofType(EpisodeActionTypes.AddEpisodes),
    map((action: AddEpisodes) => action.payload),
    concatMap((payload: { podcastId: string }) => {
      return this.feederService.getEpisodes(payload.podcastId).pipe(
        map((episodes: Episode[]) => new AddEpisodesSuccess({ episodes })),
        catchError(error => of(new AddEpisodesFailure(error)))
      );
    })
  );
}
