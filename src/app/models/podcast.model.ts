import { Episode } from './';

export interface Podcast {
  id: string;
  name: string;
  created: Date;
  episodes: Episode[];
}
