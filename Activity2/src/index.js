

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
    el: '#liste',
    data: {
      groceryList: [
        { id: 0, text: 'Légumes' },
        { id: 1, text: 'Fromage' },
        { id: 2, text: 'Tout ce que les humains sont supposés manger' },
        {id : 3, texte :'Cest la fin de cette liste.'}
      ]
    }
  })