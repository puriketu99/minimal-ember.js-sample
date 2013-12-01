@App = Ember.Application.create()

App.Todos = (Ember.ObjectController.extend(
  todos: [
    {done: true,content: "todo 1"}
    {done: false, content: "todo 2"}
  ]
  label: (->
    "Add ##{@get("todos").length + 1} todo"
  ).property("todos")
)).create()

App.TodosView = Ember.View.create(
  templateName: "todos"
  todosBinding: Ember.Binding.oneWay("App.Todos.todos")
)

App.AddView = Ember.View.create(
  templateName: "add"
  labelBinding: Ember.Binding.oneWay("App.Todos.label")
  click: ->
    currentTodos = App.Todos.get("todos").slice(0)
    nextTodo =
      done: false
      content: "todo " + (currentTodos.length + 1)
    currentTodos.push nextTodo
    App.Todos.set "todos", currentTodos
)

Ember.Handlebars.registerBoundHelper "format", (todo) ->
  tagName = if todo.done then "del" else "span"
  new Handlebars.SafeString("<" + tagName + ">" + todo.content + "</" + tagName + ">")
