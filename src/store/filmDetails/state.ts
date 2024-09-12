export default () => ({
  title: '',
  year: '',
  rated: '',
  runtime: '',
  poster: '',
  genre: '',
  describtion: '',
  directors: '',
  writers: '',
  boxoffice: '',
  stars: '',
  rate: '',
  suggestedFilms: [] as {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
  }[],
  isFetch: false
})
