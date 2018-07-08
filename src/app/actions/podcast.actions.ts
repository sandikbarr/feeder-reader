import { Action } from '@ngrx/store';
import { Podcast } from '../models';

export enum PodcastActionTypes {
  LoadPodcasts = '[Feeder API] Load Podcasts',
  LoadPodcastsSuccess = '[Feeder API] Load Podcasts Success',
  LoadPodcastsFailure = '[Feeder API] Load Podcasts Failure'
}

export class LoadPodcasts implements Action {
  readonly type = PodcastActionTypes.LoadPodcasts;

  // TODO: according to the discriminated union pattern, I should not need a payload here, but reducers don't type narrow in switch WTF
  // constructor(public payload?: any) {}
}

export class LoadPodcastsSuccess implements Action {
  readonly type = PodcastActionTypes.LoadPodcastsSuccess;

  constructor(public payload: { podcasts: Podcast[] }) {}
}

export class LoadPodcastsFailure implements Action {
  readonly type = PodcastActionTypes.LoadPodcastsFailure;

  constructor(public payload: any) {}
}

export type PodcastActions = LoadPodcasts | LoadPodcastsSuccess | LoadPodcastsFailure;
