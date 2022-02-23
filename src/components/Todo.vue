<template>
  <div class="container">
      <div class="row mt-3">
          <div class="col-md-12">
              <AddTodo></AddTodo>
          </div>
      </div>
      <div class="row mt-3">
          <div class="col-md-4" v-for="todo in myTodos" :key="todo.id">
                <div class="card text-dark bg-light mb-3 shadow-sm">
                    <div class="card-header">{{todo.title}}</div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import AddTodo from './AddTodo'
import {mapActions, mapGetters } from 'vuex' 
export default {
  components: { AddTodo },
    computed: mapGetters(['myTodos','myBlogs']),
    methods: mapActions(['getTodos']),
    mounted(){
        console.log(this.myTodos);
        this.getTodos();
    }
}
</script>

<style>

</style>