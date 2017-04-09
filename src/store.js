// const store = {
//   categories: [{
//     title: 'category1',
//     id: 1,
//     todos: [{title: 'todo11'}, {title: 'todo12'}, {title: 'todo13'}]
//   },
//     {
//       title: 'category2',
//       id: 2,
//       todos: [{title: 'todo21'}, {title: 'todo22'}, {title: 'todo23'}]
//     },
//     {
//       title: 'category3',
//       id: 3,
//       todos: [{title: 'todo31'}, {title: 'todo32'}, {title: 'todo33'}]
//     }]
// };

const store = JSON.parse(localStorage.getItem('_store')) || {categories: []};

store.mutations = {
  addCategory(category){
    store.categories.push(category);
    localStorage.setItem('_store', JSON.stringify(store));
  },
  deleteCategory(category){
    store.categories.splice(store.categories.indexOf(category), 1);
    localStorage.setItem('_store', JSON.stringify(store));
  },
  addTodo(todo, categoryId){
    store.categories.find((category) => {
      return category.id == categoryId;
    }).todos.push(todo);
    localStorage.setItem('_store', JSON.stringify(store));
  },
  deleteTodo(todo, categoryId){
    const todos = store.categories.find((category) => {
      return category.id == categoryId;
    }).todos;
    todos.splice(todos.indexOf(todo), 1);
    localStorage.setItem('_store', JSON.stringify(store));
  }
};

export default store;
