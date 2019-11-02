new Vue({
  el: "#app",
  data: {
    header: "To Do List",
    newEntry: "",
    todos: []
  },
  methods: {
    addEntry: function(){
      if(this.newEntry){  // if the newEntry is truthy
        this.todos.push(this.newEntry);  // add to array
        this.newList = "";
      }
    }
  }
})