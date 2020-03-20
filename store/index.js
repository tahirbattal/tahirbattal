import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedBlog: []
    },
    mutations: {
      setBlogs(state, blogs) {
        state.fetchedBlog = blogs;
      },
      addBlog(state, blog) {
        state.fetchedBlog.push(blog);
      },
      updateBlog(state, edittedBlog) {
        let blog_index = state.fetchedBlog.findIndex(
          blog => blog.id == edittedBlog.id
        );
        state.fetchedBlog[blog_index] = edittedBlog;
      }
    },
    actions: {
      async nuxtServerInit(vuexcontext, context) {
        const res = await axios.get(
          "https://tahirbattal-db.firebaseio.com/blogs.json"
        );
        let data = res.data;
        let blogArray = [];
        for (let key in data) {
          blogArray.push({ id: key, ...data[key] });
        }
        vuexcontext.commit("setBlogs", blogArray);
      },
      setBlogs(vuexcontext, blogs) {
        vuexcontext.commit("setBlogs", blogs);
      },
      addBlog(vuexcontext, blog) {
        return axios
          .post("https://tahirbattal-db.firebaseio.com/blogs.json", blog)
          .then(res => {
            vuexcontext.commit("addBlog", { ...blog, id: res.data.name });
          });
      },
      updateBlog(vuexcontext, edittedBlog) {
        return axios
          .put(
            "https://tahirbattal-db.firebaseio.com/blogs/" +
              edittedBlog.id +
              ".json",
            edittedBlog
          )
          .then(res => {
            vuexcontext.commit("updateBlog", edittedBlog);
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    getters: {
      getBlogs(state) {
        return state.fetchedBlog;
      }
    }
  });
};

export default createStore;
