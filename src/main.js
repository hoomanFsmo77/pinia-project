import {createApp} from "vue";
import App from "./App.vue";
import router from "./router.config.js";
import {createPinia} from "pinia";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})

const app=createApp(App)
app.use(vuetify)
app.use(router)
app.use(createPinia())
app.use(VueSweetalert2)
app.mount('#app')