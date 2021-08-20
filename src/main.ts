import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './build'

// @ts-ignore
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
