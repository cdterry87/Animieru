import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

import "@fortawesome/fontawesome-free/css/all.min.css"
import 'vuetify/dist/vuetify.min.css'
import 'material-icons/iconfont/material-icons.css'

window._ = require('lodash');

Vue.config.productionTip = false

Vue.filter('truncate', function (string, length) {
    if (!string) return ''
    string = string.toString()
    return _.truncate(string, { length })
})

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app')
