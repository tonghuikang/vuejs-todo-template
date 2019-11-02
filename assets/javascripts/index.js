new Vue({
  el: "#app",
  data: {
    header: "To Do List",
    newEntry: "",
    todos: []
  },
  watch:{
    todos: {
      handler: function(newTodos){
        sessionStorage.setItem('my-todo-list', JSON.stringify(newTodos));
      },
      deep: true
    }
  },
  methods: {
    addEntry: function(){
      if(this.newEntry){  // if the newEntry is truthy
        this.todos.push({value: this.newEntry, isDone: false});  // add to array
        this.newEntry = "";
      }
    },
    removeEntry: function(index){
      this.todos.splice(index,1);
    }
  }
})