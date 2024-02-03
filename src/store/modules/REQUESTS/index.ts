import type { TRequest } from "@/types/request"

export type RequestState = {
    requests: TRequest[]
}
export const REQUESTS = {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    actions: {
        addAction(context: any, payload: TRequest) {
            setTimeout(() => {
                context.commit({ type: 'addMutation', payload })
            }, 1000)
        }
    },
    mutations: {
        addMutation(state: RequestState, action: { payload: TRequest }) {
            state.requests.push(action.payload);
        }
    }
}
