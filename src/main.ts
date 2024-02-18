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
const BaseInput = defineAsyncComponent(() => import('@/components/common/BaseInput.vue'))
const BaseRadioGroup = defineAsyncComponent(() => import('@/components/common/BaseRadioGroup.vue'))
const BaseCheckboxGroup = defineAsyncComponent(() => import('@/components/common/BaseCheckboxGroup.vue'))
const BaseListbox = defineAsyncComponent(() => import('@/components/common/BaseListbox.vue'))
const BaseTypography = defineAsyncComponent(() => import('@/components/common/BaseTypography.vue'))

const app = createApp(App)
app.use(router)
app.use(store, key)
app.component('base-dialog', BaseDialog);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('nav-link', NavLink);
app.component('base-badge', BaseBadge);
app.component('base-input', BaseInput);
app.component('base-radio-group', BaseRadioGroup);
app.component('base-checkbox', BaseCheckboxGroup);
app.component('base-listbox', BaseListbox);
app.component('base-text', BaseTypography);
app.mount('#app')
