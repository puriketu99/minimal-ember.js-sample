// Generated by CoffeeScript 1.3.1
(function() {

  this.App = Ember.Application.create();

  App.Todos = (Ember.ObjectController.extend({
    todos: [
      {
        done: true,
        content: "todo 1"
      }, {
        done: false,
        content: "todo 2"
      }
    ],
    label: (function() {
      return "Add #" + (this.get("todos").length + 1) + " todo";
    }).property("todos")
  })).create();

  App.TodosView = Ember.View.create({
    templateName: "todos",
    todosBinding: Ember.Binding.oneWay("App.Todos.todos")
  });

  App.AddView = Ember.View.create({
    templateName: "add",
    labelBinding: Ember.Binding.oneWay("App.Todos.label"),
    click: function() {
      var currentTodos, nextTodo;
      currentTodos = App.Todos.get("todos").slice(0);
      nextTodo = {
        done: false,
        content: "todo " + (currentTodos.length + 1)
      };
      currentTodos.push(nextTodo);
      return App.Todos.set("todos", currentTodos);
    }
  });

  Ember.Handlebars.registerBoundHelper("format", function(todo) {
    var tagName;
    tagName = todo.done ? "del" : "span";
    return new Handlebars.SafeString("<" + tagName + ">" + todo.content + "</" + tagName + ">");
  });

}).call(this);
