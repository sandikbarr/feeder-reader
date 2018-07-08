import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Podcast } from '../../models';

@Component({
  selector: 'app-podcast-list-view',
  template: `
    <div *ngFor="let podcast of podcasts">
      <input type="checkbox" [id]="podcast.id" [checked]="isStarred(podcast)" (click)="toggleStar(podcast)">
      <label [for]="podcast.id">{{podcast.name}}</label>
      <ul>
        <li *ngFor="let episode of podcast.episodes">
          {{episode.name}}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['podcast-list.component.css']
})
export class PodcastsListComponent {
  @Input() podcasts: Podcast[];
  @Output() starPodcast = new EventEmitter<Podcast>();
  @Output() unstarPodcast = new EventEmitter<Podcast>();

  isStarred(podcast: Podcast): boolean {
    return false;
  }

  toggleStar(podcast: Podcast) {
    if (this.isStarred(podcast)) {
      this.unstarPodcast.emit(podcast);
    } else {
      this.starPodcast.emit(podcast);
    }
  }
}
