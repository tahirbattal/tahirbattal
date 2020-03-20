<template>
  <div>
    <div id="area" @click.capture="blankClick()">
      <NavigationMobile :class="{'fixed-top': showNav}" />
      <div class="content" :class="{'open':showNav}">
        <div class="top-bar fixed-top">
          <div class="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
            <i class="fas fa-bars" :class="{'iconNone': showNav}"></i>
          </div>

          <router-link tag="a" to="/" class="navbar-brand mt-2 ml-auto mr-5">
            <img src="../assets/image/logo.png" width="130px" alt="">
            <!-- <img src="../assets/image/index.jpg" width="30" height="30" alt /> -->
          </router-link>

          <Navigation v-if="!mobileView" />
        </div>

        <nuxt />

      </div>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import NavigationMobile from "@/components/NavigationMobile";
import Footer from "@/components/Footer";
import { reject } from "q";

export default {
  data() {
    return {
      mobileView: true,
      showNav: false
    };
  },

  components: {
    Navigation,
    NavigationMobile,
    Footer
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
    blankClick() {
      if (this.showNav === true) {
        this.showNav = false;
        // navigation icon sıkıntı çıkarıyor onu navigationMobile açılınca yok etmek işe yarar belki...
        // ayrıca yeşil boş alana tıklayınca da kapanması lazım
      }
    }
  },
  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
  computed: {
    fetchedBlogs() {
      return this.$store.getters.getBlogs;
    }
  }
};
</script>


<style>
body {
  width: 100%;
  height: 100% !important;
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma;
  background-color: #7ca971;
}

#area {
  position: absolute;
  width: 100%;
  margin: 0;
}

.top-bar {
  display: flex;
  width: 100%;
  height: 55px;
  background-color: rgb(0, 0, 0);
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  padding: 0px;
  background-color: rgb(231, 231, 231);
  border-radius: 0px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 0.7s transform cubic-bezier(0, 0.12, 0.14, 1);
}

.fixed-top {
  z-index: 90;
}

.open {
  transform: translateX(800px) rotateZ(-8deg);
  /* position: fixed; */
  z-index: 99;
  /* transform: translateX(400px); */
}

.iconNone {
  display: none;
}

.navigation-icon {
  padding: 25px 0px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  color: #7ca971;
}
.navigation-icon i {
  font-size: 2rem;
}

@media only screen and (min-width: 2561px) {
  .navigation-icon {
    padding: 13px 0px 10px 40px;
  }
}
@media only screen and (min-width: 1441px) and (max-width: 2560px) {
  .navigation-icon {
    padding: 13px 0px 10px 40px;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
  .navigation-icon {
    padding: 13px 0px 10px 40px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .navigation-icon {
    padding: 13px 0px 40px 30px;
  }
}
@media only screen and (min-width: 426px) and (max-width: 767px) {
  .navigation-icon {
    padding: 13px 0px 40px 25px;
  }
}
@media only screen and (min-width: 376px) and (max-width: 425px) {
  .navigation-icon {
    padding: 13px 0px 40px 20px;
  }
}
@media only screen and (min-width: 321px) and (max-width: 375px) {
  .navigation-icon {
    padding: 13px 0px 40px 20px;
  }
}
@media only screen and (max-width: 320px) {
  .navigation-icon {
    padding: 13px 0px 40px 20px;
  }
}
</style>
