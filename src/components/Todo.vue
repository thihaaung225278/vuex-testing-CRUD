<template>
  <div class="container">
      <div class="row mt-3">
          <div class="col-md-12">
              <AddTodo></AddTodo>
          </div>
      </div>
      <div class="row">
          <div class="col-md-">
              <FilterTodo></FilterTodo>
          </div>
      </div>
      <div class="row mt-3">
          <div class="col-md-4" v-for="todo in myTodos" :key="todo.id">
                <div class="card text-dark bg-light mb-3 shadow-sm">
                    <div class="card-header d-flex justify-content-between">
                        <span>{{todo.title}}</span>
                        <span @click="deleteTodo(todo.id)"><i class="bi bi-trash text-danger"></i></span>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import FilterTodo from './FilterTodo'
import AddTodo from './AddTodo'
import {mapActions, mapGetters } from 'vuex' 
export default {
  components: {
    FilterTodo, AddTodo },
    computed: mapGetters(['myTodos','myBlogs']),
    methods: mapActions(['getTodos','deleteTodo']),
    mounted(){
        console.log(this.myTodos);
        this.getTodos();
    }
}
</script>

<style>

</style>