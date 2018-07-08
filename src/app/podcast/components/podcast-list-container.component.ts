import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPodcastsWithEpisodes } from '../../selectors/podcast.selectors';
import { Podcast } from '../../models';

@Component({
  selector: 'app-podcast-list',
  template: `
    <app-podcast-list-view
      [podcasts]="podcasts$ | async"></app-podcast-list-view>
  `
})
export class PodcastListContainerComponent implements OnInit {
  podcasts$: Observable<Podcast[]>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.podcasts$ = this.store.pipe(select(selectPodcastsWithEpisodes));
  }
}
