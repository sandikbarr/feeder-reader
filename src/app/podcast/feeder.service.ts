import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Podcast, Episode } from '../models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FeederService {
  constructor(private http: HttpClient) {}

  getPodcasts(): Observable<Podcast[]> {
    return this.http.get('https://feeder.prx.org/api/v1/podcasts').pipe(
      map(data =>
        data['_embedded']['prx:items'].map(item => {
          return {
            id: item['id'].toString(),
            name: item['title'],
            created: new Date(item['createdAt'])
          };
        })
      )
    );
  }

  getEpisodes(podcastId: string): Observable<Episode[]> {
    return this.http.get('https://feeder.prx.org/api/v1/podcasts/' + podcastId + '/episodes').pipe(
      map(data =>
        data['_embedded']['prx:items'].map(item => {
          return {
            id: item['id'],
            podcastId,
            name: item['title'],
            created: new Date(item['publishedAt'])
          };
        })
      )
    );
  }
}
