import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DemoApp from './DemoApp.vue'
import Draggable from 'vuedraggable'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Swatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.min.css'
import DatetimePicker from 'vuetify-datetime-picker'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(DatetimePicker)

Vue.component('swatches', Swatches)
Vue.component('draggable', Draggable)

new Vue({
  el: '#app',
  components: {DemoApp},
  render: h => h('demo-app')
})
