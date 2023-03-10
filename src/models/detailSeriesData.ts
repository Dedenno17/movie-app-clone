export interface createdBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface genre {
  id: number;
  name: string;
}

export interface lastEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

export interface network {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

export interface productionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface spokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export default interface detailSeriesData {
  adult: number;
  backdrop_path: string;
  created_by: createdBy[];
  episode_run_time: number[] | null;
  first_air_date: string;
  genres: genre[];
  homepage: string;
  id: number;
  in_production: number;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: lastEpisodeToAir;
  name: string;
  next_episode_to_air: null;
  networks: network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: productionCompany[];
  seasons: season[];
  spoken_languages: spokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
