export default {
  state: {
    blogs: [
      { id: 1, title: "Blog One" },
      { id: 2, title: "Blog Two" },
    ],
  },
  getters: {
    myBlogs(state) {
      return state.blogs;
    },
  },
};
