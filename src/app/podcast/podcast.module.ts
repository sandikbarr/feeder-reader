import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPodcast from '../reducers/podcast.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PodcastEffects } from '../effects/podcast.effects';
import * as fromEpisode from '../reducers/episode.reducer';
import { EpisodeEffects } from '../effects/episode.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('podcast', fromPodcast.reducer),
    EffectsModule.forFeature([PodcastEffects, EpisodeEffects]),
    StoreModule.forFeature('episode', fromEpisode.reducer)
  ],
  declarations: []
})
export class PodcastModule { }
