
  import Vue from 'vue/dist/vue.js';
  import App from './components/app.vue';
  // import Plum from './components/plum.vue';

  require("./scss/test.scss")

  new Vue({
    el   : '#site',
    data : {
      state : 'moschops'
    },
    components : {
      App
    }
  });
