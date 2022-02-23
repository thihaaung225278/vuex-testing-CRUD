<template>
    <select class="form-select" v-model="limit" @change="filterTodo(limit)">
        <!-- <option value="" selected>All Todo list</option> -->
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
    </select>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            limit: null
        }
    },
    methods: mapActions(['filterTodo'])
}
</script>

<style>

</style>