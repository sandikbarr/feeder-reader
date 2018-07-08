import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Episode } from '../models/episode.model';

export enum EpisodeActionTypes {
  LoadEpisodes = '[Episode] Load Episodes',
  AddEpisode = '[Episode] Add Episode',
  AddEpisodes = '[Episode] Add Episodes',
  AddEpisodesSuccess = '[Episode] Add Episodes Success',
  AddEpisodesFailure = '[Episode] Add Episodes Failure',
  UpsertEpisode = '[Episode] Upsert Episode',
  UpsertEpisodes = '[Episode] Upsert Episodes',
  UpdateEpisode = '[Episode] Update Episode',
  UpdateEpisodes = '[Episode] Update Episodes',
  DeleteEpisode = '[Episode] Delete Episode',
  DeleteEpisodes = '[Episode] Delete Episodes',
  ClearEpisodes = '[Episode] Clear Episodes'
}

export class LoadEpisodes implements Action {
  readonly type = EpisodeActionTypes.LoadEpisodes;

  constructor(public payload: { episodes: Episode[] }) {}
}

export class AddEpisode implements Action {
  readonly type = EpisodeActionTypes.AddEpisode;

  constructor(public payload: { episode: Episode }) {}
}

export class AddEpisodes implements Action {
  readonly type = EpisodeActionTypes.AddEpisodes;

  constructor(public payload: { podcastId: string }) {}
}

export class AddEpisodesSuccess implements Action {
  readonly type = EpisodeActionTypes.AddEpisodesSuccess;

  constructor(public payload: { episodes: Episode[] }) {}
}

export class AddEpisodesFailure implements Action {
  readonly type = EpisodeActionTypes.AddEpisodesFailure;

  constructor(public payload: any) {}
}

export class UpsertEpisode implements Action {
  readonly type = EpisodeActionTypes.UpsertEpisode;

  constructor(public payload: { episode: Episode }) {}
}

export class UpsertEpisodes implements Action {
  readonly type = EpisodeActionTypes.UpsertEpisodes;

  constructor(public payload: { episodes: Episode[] }) {}
}

export class UpdateEpisode implements Action {
  readonly type = EpisodeActionTypes.UpdateEpisode;

  constructor(public payload: { episode: Update<Episode> }) {}
}

export class UpdateEpisodes implements Action {
  readonly type = EpisodeActionTypes.UpdateEpisodes;

  constructor(public payload: { episodes: Update<Episode>[] }) {}
}

export class DeleteEpisode implements Action {
  readonly type = EpisodeActionTypes.DeleteEpisode;

  constructor(public payload: { id: string }) {}
}

export class DeleteEpisodes implements Action {
  readonly type = EpisodeActionTypes.DeleteEpisodes;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearEpisodes implements Action {
  readonly type = EpisodeActionTypes.ClearEpisodes;
}

export type EpisodeActions =
  | LoadEpisodes
  | AddEpisode
  | AddEpisodes
  | AddEpisodesSuccess
  | AddEpisodesFailure
  | UpsertEpisode
  | UpsertEpisodes
  | UpdateEpisode
  | UpdateEpisodes
  | DeleteEpisode
  | DeleteEpisodes
  | ClearEpisodes;
