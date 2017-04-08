<style lang="scss" rel="stylesheet/scss">
    $delete-width: 90px;
    .todo-category {
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
        &:last-child {
            border-bottom: none;
        }
        .category-content {
            width: 100%;
            .category-description {
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .category-delete {
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
  import Hammer from 'hammerjs';
  export default{
    data(){
      return {
        swipeLeft:false
      }
    },
    props: ['category', 'deleteCategory'],
    methods: {
      gotoCategory(){
        this.$router.push({path: `/category/${this.category.id}`});
      },
      _deleteCategory(){
        this.deleteCategory(this.category);
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
    <div class="todo-category" @click="gotoCategory" ref="elem">
        <div class="avatar"></div>
        <div class="category-content">
            <div class="category-description">
                {{category.title}}
            </div>
        </div>
        <div v-show="swipeLeft" class="category-delete" @click.stop="_deleteCategory">
            delete
        </div>
    </div>
</template>

