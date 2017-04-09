<style lang="scss" rel="stylesheet/scss" scoped>
    .main-header {
        display: flex;
        justify-content: center;
        .main-title {
            font-size: 20px;
            margin-left: 15px;
        }
    }

    .main-content {
        background-color: #EEEEEE;
    }

    .main-footer {
        bottom: 10px;
        right: 10px;
        position: fixed;
    }

    .view {
        position: absolute;
        width: 100%;
        transition: all .3s cubic-bezier(.55, 0, .1, 1);
    }

    .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        transform: translate(30px, 0);
    }

    .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        transform: translate(-30px, 0);
    }

    .slide-up-enter-active, .slide-up-leave-active {
        transition: all .3s;
    }
    .slide-up-enter, .slide-up-leave-to /* .fade-leave-active in <2.1.8 */ {
        transform: translate(0,100%);
        opacity: 0
    }
</style>
<script>

  import CategoryList from './components/category-list.vue';
  import NewCategory from './components/new-category.vue';
  import NewTodo from './components/new-todo.vue';
  import Store from './store';


  export default{
    data(){
      return Object.assign({
        addTodoDialogShown: false,
        transitionName: 'slide-left'
      }, Store);
    },
    components: {
      CategoryList,
      NewCategory,
      NewTodo
    },

    methods: {
      openAddCategoryDialog(){
        this.$categoryDialog.showModal();
      },
      closeAddCategoryDialog(){
        this.$categoryDialog.close();
      },
      openAddTodoDialog(){
        this.addTodoDialogShown = true;
      },
      closeAddTodoDialog(){
        this.addTodoDialogShown = false;
      },
      gotoCategories(){
        this.$router.push({path: '/'});
      }
    },
    mounted(){
//      this.$todoDialog = document.querySelector('#todo-dialog');
      this.$categoryDialog = document.querySelector('#category-dialog');
      if (!this.$categoryDialog.showModal) {
//        dialogPolyfill.registerDialog(this.$todoDialog);
        dialogPolyfill.registerDialog(this.$categoryDialog);
      }
    },
    beforeRouteUpdate (to, from, next) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      next()
    }
  }
</script>
<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header main-header" @click="gotoCategories">
            <div class="main-title">Minimalist</div>
        </header>
        <main class="mdl-layout__content main-content">
            <div class="page-content">
                <transition :name="transitionName">
                    <router-view class="view"></router-view>
                </transition>
            </div>
            <div class="main-footer">
                <button v-if="$route.name === 'categories'" @click="openAddCategoryDialog"
                        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="material-icons">add</i>
                </button>
                <button v-if="$route.name === 'category'" @click="openAddTodoDialog"
                        class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="material-icons">add</i>
                </button>
            </div>
        </main>

        <new-category :add-category="mutations.addCategory" :close="closeAddCategoryDialog"></new-category>
        <transition name="slide-up">
            <new-todo v-show="addTodoDialogShown" :add-todo="mutations.addTodo" :close="closeAddTodoDialog"
                      :category-id="$route.params.id"></new-todo>
        </transition>
    </div>
</template>

