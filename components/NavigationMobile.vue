<template>
  <div id="navigation-mobile">
    <div class="navbar-collapse">
      <!-- <form class="form-inline ml-3 ">
        <input class="form-control mr-sm-2 rounded-pill col-3"  type="search" placeholder="Search" aria-label="Search" /> <br>
        <button class="btn btn-info my-2 my-sm-0 rounded-pill" type="submit">Search</button>
      </form>-->

      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" class="items col-3">Anasayfa</router-link>
        <router-link tag="li" to="/Blogs" class="items col-3">Blog</router-link>
        <router-link tag="li" to="/Projects" class="items col-3">Projeler</router-link>
        <router-link tag="li" to="/About" class="items col-3">Hakkımda</router-link>
        <router-link tag="li" to="/Contact" class="items col-3">İletişim</router-link>
        <router-link tag="li" to="/Search" class="items col-6">Arama Yap</router-link>
      </ul>

      <div class="exitButton">
        <router-link tag="i" to="" class="fas fa-times"></router-link>
      </div>

      <div class="backButton">
        <router-link tag="i" to="" class="fas fa-sign-out-alt">
          <span>Geri</span>
        </router-link>
      </div>

      <div class="social-media">
        <router-link tag="i" to="" class="fab fa-twitter"></router-link>
        <router-link tag="i" to="" class="fab fa-instagram"></router-link>
        <router-link tag="i" to="" class="fab fa-pinterest"></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
#navigation-mobile {
  padding: 80px 0 0 0;
  width: 100%;
}

ul {
  list-style: none;
  width: 100%;
  padding-left: 25px;
  padding-top: 20px;
}

.items {
  color: #fff !important;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  cursor: pointer;
}
.items:hover {
  color: rgb(74, 113, 74) !important;
}

.social-media {
  position: absolute;
  left: 45px;
  top: 125%;
}

i {
  margin: 0 20px 0 0;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
}

i:hover {
  color: rgb(74, 113, 74) !important;
  /* transform:rotateZ(60deg) !important; */
}

.exitButton {
  position: absolute;
  top: 30px;
  left: 40px;
}
.exitButton i {
  color: rgb(0, 34, 34);
}

.backButton {
  position: absolute;
  top: 103%;
  left: 40px;
}

.backButton i {
  font-size: 4rem;
  color: rgb(255, 255, 255);
}
.backButton span {
  font-size: 2rem;
  font-weight: bolder;
  position: absolute;
  top: 15px;
  left: 80px;
}
</style>
