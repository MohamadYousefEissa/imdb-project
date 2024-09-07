import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/main.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
const app = createApp(App)

app.use(bootstrap)
app.use(router)
app.use(createPinia())
app.mount('#app')
