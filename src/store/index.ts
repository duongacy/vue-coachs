import { type CoachsState } from './modules/coachs/index'
import { type InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { coachsModule } from './modules/coachs'

export type State = {
  coachs: CoachsState
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  strict: true,
  modules: {
    coachs: coachsModule
  },
  actions: {
    incrementAction: (context, payload: number) => {
      setTimeout(() => {
        context.commit({ type: 'incrementMutation', payload })
      }, 1000)
    }
  },
  mutations: {
    incrementMutation(state: State, action: { type: string; payload: number }) {
      // state.count += action.payload
    }
  }
})
