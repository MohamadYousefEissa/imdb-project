import { defineStore } from 'pinia'
export const themeStore = defineStore('themeStore', {
  state: () => ({ theme: 'dark' }),
  actions: {
    getTheme() {
      const html = document.querySelector('html')!
      this.theme = localStorage.getItem('theme') || this.preferdTheme
      html.setAttribute('data-theme', this.theme)
    },
    changeTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', this.theme)
      const html = document.querySelector('html')!
      html.setAttribute('data-theme', this.theme)
    }
  },
  getters: {
    preferdTheme() {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      return prefersDarkScheme ? 'dark' : 'light'
    }
  }
})
