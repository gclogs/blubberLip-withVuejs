import { createApp } from 'vue'
import App from './App.vue';

// router setup
import route from './routes/routes.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMagnifyingGlass, faArrowRight);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon) /* add font awesome icon component */
    .use(route)
    .mount('#app');