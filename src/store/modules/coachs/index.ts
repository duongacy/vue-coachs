import { coachsGetters } from './getters'
import { coachsActions } from './actions'
import { coachsMutations } from './mutations'

export type Coach = {
  id: string
  firstName: string
  lastName: string
  areas: ('frontend' | 'backend' | 'fullstack')[]
  description: string
  hourlyRate: number
}
export type CoachsState = {
  coachs: Coach[]
}
export const coachsModule = {
  namespaced: true,
  state() {
    return {
      coachs: [
        {
          id: 'c1',
          firstName: 'YLVN1',
          lastName: 'Le Van Nhu Y',
          areas: ['frontend', 'backend', 'fullstack'],
          description: 'lorem',
          hourlyRate: 40
        },
        {
          id: 'c2',
          firstName: 'YLVN2',
          lastName: 'Le Van Nhu Y 2',
          areas: ['frontend', 'backend', 'fullstack'],
          description: 'lorem',
          hourlyRate: 40
        }
      ]
    } as CoachsState
  },
  getters: coachsGetters,
  actions: coachsActions,
  mutations: coachsMutations
}
