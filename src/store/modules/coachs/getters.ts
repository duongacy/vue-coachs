import { type CoachsState } from './'
export const coachsGetters = {
  coachs(state: CoachsState) {
    return state.coachs
  },
  hasCoachs(state: CoachsState): boolean {
    return state.coachs.length > 0
  }
}
