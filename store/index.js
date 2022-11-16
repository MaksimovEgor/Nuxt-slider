export const state = () => ({
  slides: [],
})
export const mutations = {
  SET_SLIDES: (state, payload) => {
    state.slides = payload
  },
}
export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$axios.$get(
      'https://rangeweb.ru/test/products/'
    )
    const slides = response.map(function (slide) {
      return slide
    })
    commit('SET_SLIDES', slides)
  },
}
