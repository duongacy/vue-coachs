import { COACHES, type CoachsState } from './modules/COACHES'
import { type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { REQUESTS, type RequestState } from './modules/REQUESTS'
import { AUTHEN, type AuthenState } from './modules/AUTHEN'

export type TState = {
  COACHES: CoachsState,
  REQUESTS: RequestState,
  AUTHEN: AuthenState
  coachId: string
}

export const key: InjectionKey<Store<TState>> = Symbol()

export const store = createStore({
  // state() {
  //   return {
  //     coachId: '1'
  //   }
  // },
  modules: {
    COACHES,
    REQUESTS,
    AUTHEN
  },

})
