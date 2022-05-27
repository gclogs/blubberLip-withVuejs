import { createApp, Vue } from 'vue'
import App from './App.vue';

// router setup
import route from './routes/routes.js';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

createApp(App)
    .use(route)
    .mount('#app');