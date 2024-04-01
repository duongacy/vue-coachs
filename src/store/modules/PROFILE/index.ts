import { profileActions } from './actions';
import { profileGetters } from './getters';
import { profileMutations } from './mutations';

export const PROFILE = {
  namespaced: true,
  state() {
    return {
      userId: '',
      token: '',
    };
  },
  getters: profileGetters,
  actions: profileActions,
  mutations: profileMutations,
};
