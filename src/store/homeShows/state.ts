export default () => ({
  bundles: [] as {
    Poster: string
    Title: string
    Year: string
    imdbID: string
    searchName: string
  }[][],
  isFetch: false,
  errorMessage: '',
  topFilms: [
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg',
      Title: 'The Shawshank Redemption',
      Year: '1994',
      Type: 'movie',
      imdbID: 'tt0111161',
      searchName: 'The Shawshank Redemption'
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Title: 'The Godfather',
      Year: '1972',
      Type: 'movie',
      imdbID: 'tt0068646',
      searchName: 'The Godfather'
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      Title: 'The Dark Knight',
      Year: '2008',
      Type: 'movie',
      imdbID: 'tt0468569',
      searchName: 'The Dark Knight'
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Title: 'The Godfather Part II',
      Year: '1990',
      Type: 'movie',
      imdbID: 'tt0071562',
      searchName: 'The Godfather'
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
      Title: '12 Angry Men',
      Year: '1957',
      Type: 'movie',
      imdbID: 'tt0050083',
      searchName: '12 Angry Men'
    },
    {
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      Title: "Schindler's List",
      Year: '1993',
      Type: 'movie',
      imdbID: 'tt0108052',
      searchName: "Schindler's List"
    }
  ]
})
