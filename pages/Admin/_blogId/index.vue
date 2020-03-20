<template name="component-name">
  <div class="container">
    <NewBlog @submit="updateBlog($event)" :is-update="true" :blogs="fetchedBlog" />
  </div>
</template>

<script>
import axios from "axios";
import NewBlog from "@/components/Admin/NewBlog";

export default {
  asyncData(context) {
    return axios
      .get(
        "https://tahirbattal-db.firebaseio.com/blogs/" +
          context.params.blogId +
          ".json"
      )
      .then(res => {
        return {
          fetchedBlog: res.data,
        };
      });
  },
  methods: {
    updateBlog(edittedBlog) {
      this.$store
        .dispatch("updateBlog", {
          ...edittedBlog,
          id: this.$route.params.blogId
        })
        .then(res => {
          this.$router.push("/admin");
        });
    }
  },
  components: {
    NewBlog
  }
};
</script>

<style scoped>
.container{
  margin-top: 100px;
}

</style>