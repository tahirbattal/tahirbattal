<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button @click="$router.push('/admin/new-blog')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
    </div>

    <BlogPage :blogs="fetchedBlogs" :is-admin="true" />
  </div>
</template>

<script>
import BlogPage from "@/components/Blog/BlogPage";

export default {
  components: {
    BlogPage
  },
  computed: {
    fetchedBlogs(){
      return this.$store.getters.getBlogs;
    }
  },
};
</script>

<style scpoed>
.container{
  margin-top: 100px;
}
</style>
