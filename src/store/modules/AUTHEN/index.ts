

import type { TUserAuthen } from "@/types/authen"
export type AuthenState = {
    userId: string,
    token: string,
    tokenExpiration: string
}
export const AUTHEN = {
    namespaced: true,
    state() {
        return {
            userId: '',
            token: '',
            tokenExpiration: ''
        }

    },
    getters: {
        userId(state: AuthenState) {
            return state.userId
        },
        token(state: AuthenState) {
            return state.token
        },
        isAuthenticate(state: AuthenState) {
            return !!state.token
        }
    },
    actions: {
        async signup(context: any, userAuthen: TUserAuthen) {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s`, {
                body: JSON.stringify({
                    email: userAuthen.email,
                    password: userAuthen.password,
                    returnSecureToken: true
                }),
                method: 'POST'
            })
            const responseJson = await response.json()
            if (!response.ok) {
                const error = new Error(responseJson?.error || "Something went wrong")
                throw error
            }
            const info = {
                token: responseJson?.idToken || '',
                userId: responseJson?.localId || '',
                tokenExpiration: responseJson?.expiresIn || ''
            }
            context.commit({ type: 'setUser', payload: info })
        },
        async signin(context: any, userAuthen: TUserAuthen) {
            const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s`, {
                body: JSON.stringify({
                    email: userAuthen.email,
                    password: userAuthen.password,
                    returnSecureToken: true
                }),
                method: 'POST'
            })
            const responseJson = await response.json()
            if (!response.ok) {
                const error = new Error(responseJson?.error || "Something went wrong")
                throw error
            }
            const info = {
                token: responseJson?.idToken || '',
                userId: responseJson?.localId || '',
                tokenExpiration: responseJson?.expiresIn || ''
            }
            context.commit({ type: 'setUser', payload: info })
        }

    },
    mutations: {
        setUser(state: AuthenState, action: {
            payload: {
                token: string,
                userId: string,
                tokenExpiration: string
            }
        }) {
            state.token = action.payload.token
            state.userId = action.payload.userId
            state.tokenExpiration = action.payload.tokenExpiration
        }
    }
}
