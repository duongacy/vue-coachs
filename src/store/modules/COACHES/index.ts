import type { TCoach } from "@/types/coach"
import { coaches } from "./coaches-data"

export type CoachsState = {
  coaches: TCoach[]
}
export const COACHES = {
  namespaced: true,
  state() {
    return {
      coaches
    } as CoachsState
  },
  actions: {
    addAction(context: any, payload: TCoach) {
      setTimeout(() => {
        context.commit({ type: 'addMutation', payload })
      }, 1000)
    }
  },
  mutations: {
    addMutation(state: CoachsState, action: { payload: TCoach }) {
      state.coaches.push(action.payload);
      window.dispatchEvent(new Event('ADD_COACH_SUCCESS'))
    }
  }
}
