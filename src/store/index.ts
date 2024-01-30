import { COACHES, type CoachsState } from './modules/COACHES'
import { type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export type TState = {
  COACHES: CoachsState
}

export const key: InjectionKey<Store<TState>> = Symbol()

export const store = createStore<TState>({
  modules: {
    COACHES
  },
})
