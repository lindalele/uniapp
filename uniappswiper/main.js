import Vue from 'vue'
import App from './App'
import store from './store/index.js'

Vue.config.productionTip=false
App.myType='app'
const app=new Vue({
    ...App,
    store
})
app.$mount()