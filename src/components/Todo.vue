<template>
  <h1>Todos Components</h1>
  <div class="container">
      <div class="row mt-3">
          <div class="col-md-4" v-for="todo in myTodos" :key="todo.id">
                <div class="card text-dark bg-light mb-3 shadow-sm">
                    <div class="card-header">{{todo.title}}</div>
                    <!-- <div class="card-body">
                        <h5 class="card-title">Light card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div> -->
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex' 
export default {
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