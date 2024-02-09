import { key, store } from '@/store';
import './assets/main.css'
import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
const BaseDialog = defineAsyncComponent(() => import('@/components/common/BaseDialog.vue'))
const BaseButton = defineAsyncComponent(() => import('@/components/common/BaseButton.vue'))
const BaseCard = defineAsyncComponent(() => import('@/components/common/BaseCard.vue'))
const NavLink = defineAsyncComponent(() => import('@/components/common/NavLink.vue'))
const BaseBadge = defineAsyncComponent(() => import('@/components/common/BaseBadge.vue'))

const app = createApp(App)
app.use(router)
app.use(store, key)
app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('nav-link', NavLink);
app.component('base-badge', BaseBadge);
app.mount('#app')
