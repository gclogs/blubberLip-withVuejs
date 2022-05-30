import { createApp } from 'vue'
import App from './App.vue';

// router setup
import route from './routes/routes.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'

import { faRegularUser } from '@fortawesome/free-regular-svg-icons/faUser';

library.add(
    faMagnifyingGlass, 
    faArrowRight, 
    faUser,
    faBagShopping
);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon) /* add font awesome icon component */
    .use(route)
    .mount('#app');