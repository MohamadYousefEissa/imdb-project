import { defineStore } from 'pinia'
import { searchStore } from '../searchStore/searchStore'
import axios from 'axios'
import state from './state'
import router from '@/router/router'
export const filmDetails = defineStore('film details', {
  state,
  actions: {
    async fetchFilm(id: string) {
      this.isFetch = false
      await axios
        .get('http://www.omdbapi.com/', {
          params: {
            apikey: '9b1e74d6',
            i: id
          }
        })
        .then((res) => {
          this.suggestedFilms = [...searchStore().shows]
          this.isFetch = true
          this.title = res.data.Title
          this.year = res.data.Year
          this.rated = res.data.Rated
          this.runtime = res.data.Runtime
          this.poster = res.data.Poster
          this.genre = res.data.Genre
          this.describtion = res.data.Plot
          this.directors = res.data.Director
          this.writers = res.data.Writer
          this.boxoffice = res.data.BoxOffice
          this.stars = res.data.Actors
          this.rate = res.data.imdbRating
          searchStore().showMenu = false
          this.getSuggest()
          document.title = this.title
        })
    },
    sliceMainFilm() {
      const getIndex = this.suggestedFilms.findIndex((show: any) => {
        return show.imdbID === router.currentRoute.value.path.replace('/title/', '')
      })
      this.suggestedFilms.splice(getIndex, 1)
    },
    async getSuggest() {
      if (this.suggestedFilms.length === 0) {
        const query = router.currentRoute.value.query.search as string
        if (query) {
          await searchStore().fetchShow(query)
          this.suggestedFilms = [...searchStore().shows]
        }
      }
      this.sliceMainFilm()
    }
  },
  getters: {
    ratedGetter(state) {
      if (state.rated === 'N/A') return ''
      return `. ${state.rated}`
    },
    describtionGetter(stars) {
      if (stars.describtion === 'N/A') return ''
      return stars.describtion
    },
    genreGetter(state) {
      const genres = state.genre?.split(',')
      return genres
    },
    directorsGetter(state) {
      if (state.directors === 'N/A') return ''
      return state.directors
    },
    writersGetter(state) {
      if (state.writers === 'N/A') return ''
      return state.writers
    },
    starsGetter(state) {
      if (state.stars === 'N/A') return ''
      return state.stars
    },
    boxofficeGetter(state) {
      if (state.boxoffice === 'N/A') return ''
      return state.boxoffice
    },
    rateGetter(state) {
      if (state.rate === 'N/A') return ''
      return state.rate
    },
    runtimeGetter(state) {
      if (state.runtime === 'N/A') return ''
      return `. ${state.runtime}`
    }
  }
})
