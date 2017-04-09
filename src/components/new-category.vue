<style lang="scss" rel="stylesheet/scss" scoped>
    #category-dialog{
        top:20%;
    }
</style>
<script>
  export default{
    data(){
      return {
        category: {
          todos: []
        }
      }
    },
    methods: {
        _addCategory(){
          this.category.id = Math.random().toString(36).substring(7);
          this.addCategory(this.category);
          this.close();
          this.category = {todos:[]};
        }
    },
    props: ['addCategory', 'close']
  }
</script>
<template>
    <dialog id="category-dialog" class="mdl-dialog">
        <div class="mdl-dialog__content">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="category" v-model="category.title">
                <label class="mdl-textfield__label" for="category">Category...</label>
            </div>
        </div>
        <div class="mdl-dialog__actions">
            <button @click="close"
                    type="button" class="mdl-button mdl-js-ripple-effect mdl-js-button">Close
            </button>
            <button type="button" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--colored"
                    @click="_addCategory">OK
            </button>
        </div>
    </dialog>
</template>

