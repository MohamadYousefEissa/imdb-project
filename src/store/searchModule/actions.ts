import axios from 'axios'

export default {
  search(context: any, payload: { title: string }) {
    context.commit('showMenu', true)
    context.commit('showLoader', true)
    context.state.shows = []
    clearTimeout(context.state.searchTimeOut)
    context.state.searchTimeOut = setTimeout(async () => {
      await axios
        .get('http://www.omdbapi.com/', {
          params: {
            apikey: '9b1e74d6',
            s: payload.title.trim()
          }
        })
        .then((res) => {
          context.commit('showLoader', false)
          if (!res.data.Error) {
            context.state.shows = [...res.data.Search]
          }
        })
        .catch((err) => {
          throw new Error(err)
        })
    }, 1000)
  }
}
