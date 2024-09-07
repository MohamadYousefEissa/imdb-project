import { defineStore } from 'pinia'
import axios from 'axios'
export const searchStore = defineStore('search', {
  state: () => ({
    shows: [] as {}[],
    searchTimeOut: null as any,
    showMenu: false,
    showLoader: false
  }),
  actions: {
    search(payload: { title: string }) {
      this.showMenu = true
      this.showLoader = true
      this.shows = []
      if (this.searchTimeOut) clearTimeout(this.searchTimeOut)

      this.searchTimeOut = setTimeout(async () => {
        await axios
          .get('http://www.omdbapi.com/', {
            params: {
              apikey: '9b1e74d6',
              s: payload.title.trim()
            }
          })
          .then((res) => {
            this.showLoader = false
            if (!res.data.Error) {
              this.shows = [...res.data.Search]
            }
          })
          .catch((err) => {
            throw new Error(err)
          })
      }, 1000)
    }
  }
})
