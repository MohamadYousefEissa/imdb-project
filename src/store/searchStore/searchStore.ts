import { defineStore } from 'pinia'
import state from './state'
import axios from 'axios'
export const searchStore = defineStore('search store', {
  state,
  actions: {
    search(payload: { title: string }) {
      this.showMenu = true
      this.showLoader = true
      this.shows = []
      if (this.searchTimeOut) clearTimeout(this.searchTimeOut)

      this.searchTimeOut = setTimeout(async () => {
        this.fetchShow(payload.title)
      }, 1000)
    },
    async fetchShow(title: string) {
      await axios
        .get('http://www.omdbapi.com/', {
          params: {
            apikey: '9b1e74d6',
            s: title.trim()
          }
        })
        .then((res) => {
          this.showLoader = false
          if (!res.data.Error) {
            this.shows = [...res.data.Search]
          }
        })
        .catch((err) => {
          console.log(err.message)
          throw new Error(err)
        })
    }
  }
})
