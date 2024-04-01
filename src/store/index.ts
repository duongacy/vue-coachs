import { type InjectionKey } from 'vue';
import { Store, createStore } from 'vuex';
import { AUTHEN } from './modules/AUTHEN';
import { COACHES, type CoachesState } from './modules/COACHES';
import { PROFILE } from './modules/PROFILE';
import { REQUESTS, type RequestState } from './modules/REQUESTS';

type AuthenState = any;
export type TState = {
  COACHES: CoachesState;
  REQUESTS: RequestState;
  AUTHEN: AuthenState;
  coachId: string;
};

export const key: InjectionKey<Store<TState>> = Symbol();

export const store = createStore({
  modules: {
    COACHES,
    REQUESTS,
    AUTHEN,
    PROFILE,
  },
});
