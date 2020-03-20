<template>
  <div class="container-fluid marginTop">
    <section id="cover">
      <Starter />
      <!-- <Header /> -->
      <!-- <Services/> -->
      <Portfolio />
      <whatWeDo />
      <!-- <BlogPage :blogs="fetchedBlogs"/> -->

      <About />
      <Contact />
      <Footer />
    </section>
  </div>
</template>

<script>
import Starter from "@/components/kayanFigure/Starter";
import whatWeDo from "@/components/whatWeDo/whatWeDo";
import Header from "@/components/Header";
import BlogPage from "@/components/Blog/BlogPage";
import Portfolio from "../components/Portfolio";
import About from "@/components/About/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/Footer";
import { reject } from "q";


export default {
  components: {
    Starter,
    whatWeDo,
    Header,
    BlogPage,
    Portfolio,
    About,
    Contact,
    Footer
  },
  computed: {
    fetchedBlogs(){
      return this.$store.getters.getBlogs;
    }
  },
};
</script>

<style scoped>
.container-fluid {
  margin-left: 0 !important;
  width: 100%;
}

@media screen and (min-width: 990px) {
  .marginTop {
    margin-top: 10px;
  }
}

@media screen and (max-width: 990px) {
  .marginTop {
    margin-top: 5px;
  }
}

#cover {
  font-family: "Montserrat", sans-serif;
  background: url(../assets/image/header.jpg) no-repeat center fixed;
  height: 100%;
  /* height 200vh den değiştirildi. */
  margin: -15px;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
</style>