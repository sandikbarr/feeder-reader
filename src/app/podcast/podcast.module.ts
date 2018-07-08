import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromPodcast from '../reducers/podcast.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PodcastEffects } from '../effects/podcast.effects';
import * as fromEpisode from '../reducers/episode.reducer';
import { EpisodeEffects } from '../effects/episode.effects';
import { FeederService } from './feeder.service';
import { PodcastListContainerComponent } from './components/podcast-list-container.component';
import { PodcastsListComponent } from './components/podcast-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('podcast', fromPodcast.reducer),
    EffectsModule.forFeature([PodcastEffects, EpisodeEffects]),
    StoreModule.forFeature('episode', fromEpisode.reducer)
  ],
  declarations: [PodcastListContainerComponent, PodcastsListComponent],
  exports: [PodcastListContainerComponent],
  providers: [FeederService]
})
export class PodcastModule {}
