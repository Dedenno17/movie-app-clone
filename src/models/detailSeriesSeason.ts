export interface episode {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export default interface detailSeriesSeason {
  _id: string;
  air_date: string;
  episodes: episode[];
  name: string;
  overview: string;
  id: number;
  poster_path: string;
  season_number: number;
}
