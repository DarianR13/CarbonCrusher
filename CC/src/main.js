//import Vue from 'vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Calculator from './components/Calculator.vue'
import Home from './components/Home.vue'
import Log_in from './components/Log-in.vue'
import Sign_in from './components/Sign-in.vue'
import Results from './components/Results.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
  })


//import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/calculator', component: Calculator     },
        { path: '/home', component: Home     },
        { path: '/log_in', component: Log_in     },
        { path: '/sign-in', component: Sign_in     },
        { path: '/calculator/results', component: Results     },
      

        
    ]
});

const app = createApp(App)
app.use(vuetify);
//Vue.use(Vuetify)
app.use(router);

app.mount('#app')