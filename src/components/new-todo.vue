<style lang="scss" rel="stylesheet/scss" scoped>
    .new-todo{
        position:absolute;
        height: 100vh;
        width:100%;
        z-index:100;
        .content{
            background-color: #3F51B5;
            color: white;
            .content-header{
                padding: 20px 20px;
            }
            .content-body{
                height:100px;
                margin-top:20px;
                width: calc(100% - 30px);
                /* margin: auto; */
                margin-left: 30px;
                .title-input{
                    color:white;
                    font-size:20px;
                }
                .title-label{
                    color:white
                }
            }
            .content-footer{
                .confirm-btn{
                    background-color: #00b0ff;
                    position:absolute;
                    transform: translate(-50%, -50%);
                    right:0;
                }
            }
        }
        .time{
            font-size:20px;
            height:100%;
            background-color: #EEEEEE;
            padding: 60px 40px;
            .remind-me{
                display: flex;
                justify-content: space-between;
                .reminder-toggle{
                    width: 30px;
                }
            }
            .time-select{
                display: flex;
                margin-top:20px;
                .separator{
                    display: flex;
                    color:#00b0ff;
                    flex-direction: column;
                    justify-content: center;
                    margin: 0 5px;
                }
            }
            .remind-hint{
                margin-top:20px;
                color: grey;
            }
        }
    }

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
          this.todo.id = Math.random().toString(36).substring(7);
          this.addTodo(this.todo, this.categoryId);
          this.close();
          this.todo = {};
        }
    },
    props: ['addTodo', 'close', 'categoryId']
  }
</script>
<template>
    <div class="new-todo">
        <div class="content">
            <div class="content-header">
                <button class="mdl-button mdl-js-button mdl-button--icon" @click="close">
                    <i class="material-icons">close</i>
                </button>
            </div>
            <div class="content-body mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="title-input mdl-textfield__input" type="text" id="todo" v-model="todo.title">
                <label class="title-label mdl-textfield__label" for="todo">TODO...</label>
            </div>
            <div class="content-footer">
                <button @click="_addTodo"
                        class="confirm-btn mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                    <i class="material-icons">send</i>
                </button>
            </div>
        </div>
        <div class="time">
            <div class="remind-me">
                <div>Remind me</div>
                <label class="reminder-toggle mdl-switch mdl-js-switch mdl-js-ripple-effect" for="switch-2">
                    <input type="checkbox" id="switch-2" class="mdl-switch__input">
                    <span class="mdl-switch__label"></span>
                </label>
            </div>
            <div class="time-select">
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="sample1">
                    <label class="mdl-textfield__label" for="sample1">Date...</label>
                </div>
                <div class="separator">
                    <span>@</span>
                </div>
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="sample1">
                    <label class="mdl-textfield__label" for="sample1">Time...</label>
                </div>
            </div>
            <div class="remind-hint">
                Reminder set for 25 Sep 2015, 10:00AM
            </div>
        </div>
    </div>
    <!--<dialog id="todo-dialog" class="mdl-dialog">-->
        <!--<div class="mdl-dialog__content">-->
            <!--<div class="mdl-textfield mdl-js-textfield mdl-textfield&#45;&#45;floating-label">-->
                <!--<input class="mdl-textfield__input" type="text" id="todo" v-model="todo.title">-->
                <!--<label class="mdl-textfield__label" for="todo">TODO...</label>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="mdl-dialog__actions">-->
            <!--<button @click="close"-->
                    <!--type="button" class="mdl-button mdl-js-ripple-effect mdl-js-button">Close-->
            <!--</button>-->
            <!--<button type="button" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button&#45;&#45;colored"-->
                    <!--@click="_addTodo">OK-->
            <!--</button>-->
        <!--</div>-->
    <!--</dialog>-->
</template>

