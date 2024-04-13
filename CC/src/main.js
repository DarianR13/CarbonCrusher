import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Calculator from './components/Calculator.vue'
import Home from './components/Home.vue'
import Log_in from './components/Log-in.vue'
import Sign_in from './components/Sign-in.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/calculator', component: Calculator     },
        { path: '/home', component: Home     },
        { path: '/log_in', component: Log_in     },
        { path: '/sign-in', component: Sign_in     }
      

        
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')