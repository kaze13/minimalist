<style lang="scss" rel="stylesheet/scss" scoped>
    .category-list{
        background-color: white;
    }
</style>
<script>
    import CategoryItem from './category-item.vue';

    export default{
        data(){
            return{
            }
        },
        props:['categories','deleteCategory'],

        components:{
          CategoryItem
        }
    }
</script>
<template>
    <div class="category-list">
        <category-item :key="item.id" v-for="item in categories" :category="item" :deleteCategory="deleteCategory"></category-item>
    </div>
</template>

