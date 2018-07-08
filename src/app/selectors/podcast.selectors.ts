import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Podcast, Episode } from '../models';

import * as fromPodcast from '../reducers/podcast.reducer';
import * as fromEpisode from '../reducers/episode.reducer';

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

export const selectEpisodeState = createFeatureSelector<fromEpisode.State>('episode');
export const selectAllEpisodes = createSelector(selectEpisodeState, fromEpisode.selectAll);
export const selectPodcastsWithEpisodes = createSelector(
  selectPodcastEntities,
  selectAllEpisodes,
  (entities: { [id: string]: Podcast }, allEpisodes: Episode[]): Podcast[] => {
    return Object.keys(entities).map(id => {
      return { ...entities[id], episodes: allEpisodes.filter(episode => episode.podcastId === id) };
    });
  }
);
