import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import {createVuetify} from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({components})
createApp(App).use(vuetify).mount('#app')
