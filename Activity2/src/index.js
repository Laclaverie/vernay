

var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app = new Vue({
    el: '#app2',
    data: {
      message: 'Hello Vue.js !',
      counter :0
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join(''),
        this.counter+=1
      }
    }
  })