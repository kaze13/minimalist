<style lang="scss" rel="stylesheet/scss">
    .category{
        background-color: white;
    }
</style>
<script>
    import TodoItem from './todo-item.vue';

    export default{
        data(){
            return{
            }
        },
        props:['category', 'deleteTodo'],

        components:{
          TodoItem
        }
    }
</script>
<template>
    <div class="category">
        <todo-item v-for="item in category.todos" :todo="item" :delete-todo="deleteTodo" :category-id="category.id"></todo-item>
    </div>
</template>

