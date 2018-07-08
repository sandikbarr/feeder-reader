import { PodcastActions, PodcastActionTypes } from '../actions/podcast.actions';
import { Podcast } from '../models';

export interface State {
  entities?: { [id: string]: Podcast };
  loaded?: boolean;
  loading?: boolean;
  error?: any;
}

export const initialState: State = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: PodcastActions): State {
  switch (action.type) {
    case PodcastActionTypes.LoadPodcasts:
      return {
        ...state,
        loading: true,
        loaded: false
      };

    case PodcastActionTypes.LoadPodcastsSuccess: {
      return {
        ...state,
        entities: action.payload.podcasts.reduce(
          (entities: { [id: string]: Podcast }, item: Podcast) => {
            return {
              ...entities,
              [item.id]: item
            };
          },
          { ...state.entities }
        ),
        loading: false,
        loaded: true
      };
    }

    case PodcastActionTypes.LoadPodcastsFailure: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        loaded: false
      };
    }

    default:
      return state;
  }
}

export const getEntities = (state: State) => state.entities;
export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;
export const getError = (state: State) => state.error;
