import { defineStore } from 'pinia'
import axios from 'axios'
import state from './state'
export const homeShows = defineStore('home shows', {
  state,
  actions: {
    async fetchBundles() {
      await this.fetchShow('Harry Potter')
      await this.fetchShow('Avengers')
      await this.fetchShow('Spider-Man')
      this.isFetch = true
    },
    async fetchShow(title: string) {
      try {
        const req = await axios.get('https://www.omdbapi.com/', {
          params: {
            apikey: '9b1e74d6',
            s: title.trim()
          }
        })
        if (req.data.Search) {
          req.data.Search[0].searchName = title
          this.bundles.push(req.data.Search)
        }
      } catch (err: any) {
        this.errorMessage = 'Netwrok Error, Check Your Internet'
        throw new Error(err.message)
      }
    }
  }
})
