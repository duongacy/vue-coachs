import { key, store } from '@/store'
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.mount('#app')
