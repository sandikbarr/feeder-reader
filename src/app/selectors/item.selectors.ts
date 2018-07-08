import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Podcast } from '../models';

import * as fromPodcast from '../reducers/podcast.reducer';

export const selectPodcastState = createFeatureSelector<fromPodcast.State>('podcast');
export const selectPodcastEntities = createSelector(selectPodcastState, fromPodcast.getEntities);
export const selectPodcast = createSelector(
  selectPodcastEntities,
  (entities): Podcast[] => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const selectPodcastsLoaded = createSelector(selectPodcastState, fromPodcast.getLoaded);
export const selectPodcastsLoading = createSelector(selectPodcastState, fromPodcast.getLoading);
export const selectPodcastError = createSelector(selectPodcastState, fromPodcast.getError);
