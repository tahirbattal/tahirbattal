<template name="component-name">
  <div class="container">
    <NewBlog @submit="saveBlog($event)" />
  </div>
</template>

<script>
import axios from "axios";
import NewBlog from "@/components/Admin/NewBlog";

export default {
  components: {
    NewBlog
  },
  methods: {
    saveBlog(blog) {
      this.$store.dispatch("addBlog", blog)
        .then(res => {
            this.$router.push("/admin");
        });
    }
  }
};
</script>

<style scoped>
.container{
  margin-top: 100px;
}

  
</style>