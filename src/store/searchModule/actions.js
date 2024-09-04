import axios from 'axios'

export default {
  search(context, payload) {
    clearTimeout(context.state.to)
    context.state.to = setTimeout(async () => {
      await axios
        .get('http://www.omdbapi.com/', {
          params: {
            apikey: '9b1e74d6',
            s: payload.title.trim()
          }
        })
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          throw new Error(err)
        })
    }, 1000)
  }
}
