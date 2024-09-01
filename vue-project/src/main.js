import './css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()

const app = createApp(App)
app.component('NavBar', NavBar)
app.use(pinia)
app.use(router)
app.mount('#app')
