import Toast, { POSITION } from 'vue-toastification'

import './assets/main.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
const options = {
  position: POSITION.TOP_RIGHT,
}

app.use(VueQueryPlugin)
app.use(createPinia())
app.use(router)
app.use(Toast, options)
app.mount('#app')
