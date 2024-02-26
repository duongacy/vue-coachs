import { COACHES, type CoachsState } from './modules/COACHES'
import { type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { REQUESTS, type RequestState } from './modules/REQUESTS'
import { AUTHEN } from './modules/AUTHEN'

type AuthenState = any
export type TState = {
  COACHES: CoachsState,
  REQUESTS: RequestState,
  AUTHEN: AuthenState
  coachId: string
}

export const key: InjectionKey<Store<TState>> = Symbol()

export const store = createStore({
  modules: {
    COACHES,
    REQUESTS,
    AUTHEN
  },
})
