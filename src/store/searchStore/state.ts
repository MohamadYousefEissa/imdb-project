export default () => ({
  shows: [] as Data<string>,
  searchTimeOut: null as any,
  showMenu: false,
  showLoader: false
})

type Data<T> = {
  imdbID: T
  Title: T
  Year: T
  Poster: T
  Type: T
}[]
