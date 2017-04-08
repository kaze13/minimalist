<style lang="scss" rel="stylesheet/scss">
</style>
<script>
  export default{
    data(){
      return {
        todo: {}
      }
    },
    methods: {
        _addTodo(){
          this.addTodo(this.todo, this.categoryId);
          this.close();
          this.todo = {};
        }
    },
    props: ['addTodo', 'close', 'categoryId']
  }
</script>
<template>
    <dialog id="todo-dialog" class="mdl-dialog">
        <div class="mdl-dialog__content">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="todo" v-model="todo.title">
                <label class="mdl-textfield__label" for="todo">TODO...</label>
            </div>
        </div>
        <div class="mdl-dialog__actions">
            <button @click="close"
                    type="button" class="mdl-button mdl-js-ripple-effect mdl-js-button">Close
            </button>
            <button type="button" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--colored"
                    @click="_addTodo">OK
            </button>
        </div>
    </dialog>
</template>

