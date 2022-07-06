export interface IMovie {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  movie_banner: string;
  rt_score: string;
  release_date: string;
  people: string[];
  original_title: string;
}

export interface IPerson {
  name: string;
  gender: string;
  age: string;
  id: string;
}
