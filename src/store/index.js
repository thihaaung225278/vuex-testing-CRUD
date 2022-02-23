// import { createApp } from "vue";
import { createStore } from "vuex";
import Todo from "./modules/Todo";
import Blogs from "./modules/Blogs";

const store = createStore({
  modules: { Todo, Blogs },
});

export default store;
