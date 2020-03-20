<template>
  <div>
      <BlogDetail :blog="fetchedBlog"/>
      <Footer/>
    </div>
</template>

<script>
import axios from 'axios';
import BlogDetail from "@/components/Blog/BlogDetail";
import Footer from "@/components/Footer";


export default {

  components: {
    BlogDetail,
    Footer
  },
  asyncData(context) {
    console.log(context);
    
    return axios.get('https://tahirbattal-db.firebaseio.com/blogs/'+ context.params.blogId +'.json')
    .then(res => {
      return {
        fetchedBlog: res.data
      }
    })
  },
};
</script>


