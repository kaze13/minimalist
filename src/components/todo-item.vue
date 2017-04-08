<style lang="scss" rel="stylesheet/scss">
    $delete-width: 90px;
    .todo-item {
        transition: right .3s;
        border-bottom: 1px solid #e0e0e0;
        font-size: 20px;
        height: 50px;
        padding: 10px;
        display: flex;
        align-items: center;
        right: 0;
        position: relative;
        &.swipe-left {
            right: $delete-width;
        }
        &:last-child{
            border-bottom:none;
        }
        .avatar{
            width:50px;
            height:50px;
        }
        .todo-content{
            width: 100%;
            .todo-description{
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .todo-delete {
            background-color: red;
            position: absolute;
            right: -$delete-width;
            color: white;
            height: 70px;
            width: $delete-width;
            line-height: 70px;
            text-align: center;
        }
    }
</style>
<script>
  export default{
    data(){
      return {
        swipeLeft: false
      }
    },
    props: ['todo', 'deleteTodo', 'categoryId'],
    methods: {
      gotoTodo(){
        this.$router.push({path: `/category/${this.category.id}`});
      },
      _deleteTodo(){
        this.deleteTodo(this.todo, this.categoryId);
        this.$refs.elem.classList.remove('swipe-left');
      }
    },
    mounted(){
      const hammer = new Hammer(this.$refs.elem);
      hammer.on('swipeleft', () => {
        this.swipeLeft = true;
        this.$refs.elem.classList.add('swipe-left');
      });
      hammer.on('swiperight', () => {
        this.swipeLeft = false;
        this.$refs.elem.classList.remove('swipe-left');
      });
    }
  }
</script>
<template>
    <div class="todo-item" @click="gotoTodo" ref="elem">

        <div class="todo-content">
            <div class="todo-description">
                {{todo.title}}
            </div>
            <div class="todo-time">
                {{todo.time}}
            </div>
        </div>
        <div  v-show="swipeLeft" class="todo-delete" @click.stop="_deleteTodo">
            delete
        </div>
    </div>
</template>

