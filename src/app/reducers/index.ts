import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPodcast from './podcast.reducer';
import * as fromEpisode from './episode.reducer';

export interface State {

  podcast: fromPodcast.State;
  episode: fromEpisode.State;
}

export const reducers: ActionReducerMap<State> = {

  podcast: fromPodcast.reducer,
  episode: fromEpisode.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
