import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPodcast from './podcast.reducer';

export interface State {

  podcast: fromPodcast.State;
}

export const reducers: ActionReducerMap<State> = {

  podcast: fromPodcast.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
