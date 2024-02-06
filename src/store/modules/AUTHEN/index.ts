export type AuthenState = {
  userId: string
  token: string
  tokenExpiration: string
}
export const AUTHEN = {
  namespaced: true,
  state() {
    return {
      userId: '',
      token: '',
      tokenExpiration: ''
    }
  },
  getters: {
    userId(state: AuthenState) {
      return state.userId
    },
    token(state: AuthenState) {
      return state.token
    },
    isAuthenticate(state: AuthenState) {
      return !!state.token
    }
  },
  actions: {},
  mutations: {}
}
