

import type { TUserAuthen } from "@/types/authen"
let timer: any;
export type AuthenState = {
    userId: string,
    token: string,
    autoLogout: boolean
}
export const AUTHEN = {
    namespaced: true,
    state() {
        return {
            userId: '',
            token: '',
            autoLogout: false
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
        },
        isAutoLogout(state: AuthenState) {
            return state.autoLogout
        }
    },
    actions: {
        async auth(context: any, payload: { mode: 'signin' | 'signup', userAuthen: TUserAuthen }) {
            let url;
            if (payload.mode === 'signin') url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s`
            else url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s`;

            const response = await fetch(url, {
                body: JSON.stringify({
                    email: payload.userAuthen.email,
                    password: payload.userAuthen.password,
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
            }
            context.commit({ type: 'setUser', payload: info })

            const expiresIn = +responseJson?.expiresIn * 1000
            timer = setTimeout(() => {
                context.dispatch("autoLogout");
            }, expiresIn)

            const tokenExpiration = expiresIn + new Date().getTime();
            localStorage.setItem('token', info.token)
            localStorage.setItem('userId', info.userId)
            localStorage.setItem('tokenExpiration', tokenExpiration.toString())
        },
        logout(context: any) {
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('tokenExpiration')
            clearTimeout(timer)
            context.commit({
                type: 'setUser', payload: {
                    token: null,
                    userId: null,
                }
            })
        },
        autoLogin(context: any) {
            const nowTime = new Date().getTime()
            const token = localStorage.getItem('token')
            const userId = localStorage.getItem('userId')
            const tokenExpiration = localStorage.getItem('tokenExpiration')

            if (!token || !userId || !tokenExpiration) return
            const remainTime = +tokenExpiration - nowTime;
            if (remainTime < 0) return
            context.commit({ type: 'setUser', payload: { token, userId } })
            setTimeout(() => {
                context.dispatch('autoLogout')
            }, remainTime);
        },
        autoLogout(context: any) {
            context.dispatch('logout')
            context.commit('setAutoLogout')
        }
    },
    mutations: {
        setUser(state: AuthenState, action: {
            payload: {
                token: string,
                userId: string
            }
        }) {
            state.token = action.payload.token
            state.userId = action.payload.userId
        },
        setAutoLogout(state: AuthenState) {
            state.autoLogout = true;
        }
    }
}
