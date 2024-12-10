import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setMaxPostToRead } from './stores/post/plugin/setMaxPostToRead'
import { userHasReachThreshold } from './stores/post/plugin/userHasReachThreshold'
import { monitorActions } from './stores/post/plugin/monitorActions'
import { trackUserActivities } from './stores/post/plugin/trackUserActivities'

const app = createApp(App)

const pinia=createPinia()
pinia.use(setMaxPostToRead)
pinia.use(userHasReachThreshold)
pinia.use(monitorActions)
pinia.use(trackUserActivities)

app.use(pinia)
app.use(router)

app.mount('#app')
