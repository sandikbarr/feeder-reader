import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Episode } from '../models/episode.model';
import { EpisodeActions, EpisodeActionTypes } from '../actions/episode.actions';

export interface State extends EntityState<Episode> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Episode> = createEntityAdapter<Episode>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(state = initialState, action: EpisodeActions): State {
  switch (action.type) {
    case EpisodeActionTypes.AddEpisode: {
      return adapter.addOne(action.payload.episode, state);
    }

    case EpisodeActionTypes.AddEpisodesSuccess: {
      return adapter.addMany(action.payload.episodes, state);
    }

    case EpisodeActionTypes.UpsertEpisode: {
      return adapter.upsertOne(action.payload.episode, state);
    }

    case EpisodeActionTypes.UpsertEpisodes: {
      return adapter.upsertMany(action.payload.episodes, state);
    }

    case EpisodeActionTypes.UpdateEpisode: {
      return adapter.updateOne(action.payload.episode, state);
    }

    case EpisodeActionTypes.UpdateEpisodes: {
      return adapter.updateMany(action.payload.episodes, state);
    }

    case EpisodeActionTypes.DeleteEpisode: {
      return adapter.removeOne(action.payload.id, state);
    }

    case EpisodeActionTypes.DeleteEpisodes: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case EpisodeActionTypes.LoadEpisodes: {
      return adapter.addAll(action.payload.episodes, state);
    }

    case EpisodeActionTypes.ClearEpisodes: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();
