import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";

import '@assets/css/style.css'
import '@assets/css/bootstrap.min.css'
import '@assets/css/responsive.css'
import '@assets/css/default.css'
import '@assets/css/meanmenu.min.css'
import '@assets/css/material-design-iconic-font.css'

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')

