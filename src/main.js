import './style.css'
import { Vue3OrgChartPlugin } from 'vue3-org-chart'
import 'vue3-org-chart/dist/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Vue3OrgChartPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
