import Vue from 'vue'

export default {
  state: {
    getList: []
  },
  mutations: {
    updateList (state, data) {
      state.getList = data
    }
  },
  actions: {
    clearRegistries (context) {
      context.commit('updateList', [])
    },
    getRegistries (context, config) {
      if (!config.limit) {
        config.limit = 200
      }

      if (!config.page) {
        config.page = 1
      }

      Vue.http
        .get(
          'api/' +
            config.resource +
            '?limit=' +
            config.limit +
            '&page=' +
            config.page
        )
        .then(response => {
          context.commit('updateList', response.data)
        })
    }
  }
}
