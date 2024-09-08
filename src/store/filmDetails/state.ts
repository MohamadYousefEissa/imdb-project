export default () =>
  ({
    title: null,
    year: null,
    rated: null,
    runtime: null,
    poster: null,
    genre: null,
    describtion: null,
    directors: null,
    writers: null,
    boxoffice: null,
    stars: null,
    rate: null
  }) as State

interface State {
  title: string | null
  year: string | null
  rated: string | null
  runtime: string | null
  poster: string | null
  genre: string | null
  describtion: string | null
  directors: string | null
  writers: string | null
  boxoffice: string | null
  stars: string | null
  rate: string | null
}
