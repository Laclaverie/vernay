
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
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Légumes' },
        { id: 1, text: 'Fromage' },
        { id: 2, text: 'Tout ce que les humains sont supposés manger' }
      ],
      seen : 0
    },
    methods:{
      voir:function(){
        if (this.seen==0){this.seen=1}
        if (this.seen==1){this.seen=0}
      }
    }
  })
  
  new Vue({
    el: '#tcheck',
    data: {
      checkedNames: []
    }
  })
