import Vue from 'vue'
import Vuex from 'vuex'
import Person from './Person'
Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    Person,
  }
})
