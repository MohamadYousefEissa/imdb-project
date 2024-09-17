import { defineStore } from 'pinia'
import axios from 'axios'
import state from './state'
export const homeShows = defineStore('home shows', {
  state,
  actions: {
    async fetchBundles() {
      await this.fetchShow('avengers')
      await this.fetchShow('batman')
      await this.fetchShow('spider-man')
      await this.fetchShow('harry potter')
      this.isFetch = true
    },
    async fetchShow(title: string) {
      try {
        const req = await axios.get('http://www.omdbapi.com/', {
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
        throw new Error(err)
      }
    }
  }
})
