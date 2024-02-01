import { COACHES, type CoachsState } from './modules/COACHES'
import { type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { REQUESTS, type RequestState } from './modules/REQUESTS'

export type TState = {
  COACHES: CoachsState,
  REQUESTS: RequestState,
  coachId: string
}

export const key: InjectionKey<Store<TState>> = Symbol()

export const store = createStore({
  state() {
    return {
      coachId: '1'
    }
  },
  modules: {
    COACHES,
    REQUESTS
  },

})
