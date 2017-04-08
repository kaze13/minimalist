import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import CategoryList from './components/category-list.vue';
import Category from './components/category.vue';
import Store from './store';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

if(process.env.NODE_ENV === 'production'){
  OfflinePluginRuntime.install();
}

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'categories',
      component: CategoryList,
      props: {categories: Store.categories, deleteCategory:Store.mutations.deleteCategory}
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category,
      props: (route) => {
        return {
          deleteTodo:Store.mutations.deleteTodo,
          category: Store.categories.find((category) => {
            return category.id == route.params.id;
          })
        }
      }
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
