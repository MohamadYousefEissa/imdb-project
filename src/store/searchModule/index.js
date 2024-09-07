import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
export default {
  state() {
    return state
  },
  actions,
  mutations,
  getters
}
