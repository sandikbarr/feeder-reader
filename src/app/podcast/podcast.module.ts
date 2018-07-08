import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromPodcast from '../reducers/podcast.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PodcastEffects } from '../effects/podcast.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('podcast', fromPodcast.reducer),
    EffectsModule.forFeature([PodcastEffects])
  ],
  declarations: []
})
export class PodcastModule { }
