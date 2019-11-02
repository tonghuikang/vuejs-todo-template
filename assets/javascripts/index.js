new Vue({
  el: "#app",
  data: {
    header: "To Do List",
    newEntry: "",
    todos: []
  },
  computed: {
    // computed anytime the Vue model is changed
    unfinishedEntries: function() {
      return this.todos.filter(entry => !entry.isDone);
    }
  },
  watch: {
    todos: {
      handler: function(newTodos) {
        sessionStorage.setItem("my-todo-list", JSON.stringify(newTodos));
      },
      deep: true // to watch all the checkboxes as well
    }
  },
  methods: {
    addEntry: function() {
      if (this.newEntry) {
        // if the newEntry is truthy
        this.todos.push({ value: this.newEntry, isDone: false }); // add to array
        this.newEntry = "";
      }
    },
    removeEntry: function(index) {
      this.todos.splice(index, 1);
    }
  },
  // lifecycle hooks
  beforeCreate: function() {
    console.log("beforeCreate");
  },
  created: function() {
    console.log("created");
  },
  beforeMount: function() {
    console.log("beforeMount");
  },
  mounted: function() {
    console.log("mounted");
    const ssTodos = sessionStorage.getItem("my-todo-list");
    this.todos = ssTodos ? JSON.parse(ssTodos) : []; // if ssTodos is truthy, parse
  }
});
