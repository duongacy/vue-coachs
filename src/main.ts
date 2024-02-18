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
const BaseCheckbox = defineAsyncComponent(() => import('@/components/common/BaseCheckbox.vue'))
const BaseSelect = defineAsyncComponent(() => import('@/components/common/BaseSelect.vue'))
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
app.component('base-checkbox', BaseCheckbox);
app.component('base-select', BaseSelect);
app.component('base-text', BaseTypography);
app.mount('#app')
