import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDAgInw5PVsyspo3wrS_KO61ZE7j9i7Yqc",
  authDomain: "chatfirebasevue.firebaseapp.com",
  databaseURL: "https://chatfirebasevue.firebaseio.com",
  projectId: "chatfirebasevue",
  storageBucket: "chatfirebasevue.appspot.com",
  messagingSenderId: "594493465843",
  appId: "1:594493465843:web:ca45beef8c958153c28386",
  measurementId: "G-V8V0GD1TB7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
