<template>
  <div>
    <BlogPage :blogs="fetchedBlogs" />
    <Footer />
  </div>
</template>

<script>
// import Navbar from '../components/Navbar'
import BlogPage from "@/components/Blog/BlogPage";
import Footer from "@/components/Footer";

export default {

  components: {
    BlogPage,
    Footer
  },
  computed: {
    fetchedBlogs() {
      return this.$store.getters.getBlogs;
    }
  }
};
</script>


