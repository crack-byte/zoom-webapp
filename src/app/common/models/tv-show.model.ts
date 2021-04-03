import {Episode} from './episode.model';

export interface TvShow {
  id: number;
  name: string;
  permalink: string;
  start_date: string;
  country: string;
  network: string;
  status: string;
  image_thumbnail_path: string;
  url: string;
  description: string;
  description_source: string;
  runtime: number;
  image_path: string;
  rating: string;
  rating_count: string;
  genres: string[];
  pictures: [any];
  images: any[];
  episodes: Episode[];
}
