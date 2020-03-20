<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="navigation">
    <router-link tag="a" to="/" class="navbar-brand ml-3">
      <img src="../assets/image/logo.png" width="100" alt />
    </router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" to="/" class="items">Anasayfa</router-link>
        <router-link tag="li" to="/Blogs" class="items">Blog</router-link>
        <router-link tag="li" to="/Projects" class="items">Projeler</router-link>
        <router-link tag="li" to="/About" class="items">Hakkımda</router-link>
        <router-link tag="li" to="/Contact" class="items">İletişim</router-link>
      </ul>
      <form class="form-inline mr-4">
        <input
          class="form-control mr-sm-2 rounded-pill"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-info my-2 my-sm-0 rounded-pill" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style scoped>
#navigation {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid transparent;
  border-radius: 0px;
}

.navbar {
  background-color: #1a1a1a !important;
}

ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 20px 0 0;
}

.items {
  font-size: 22px;
  padding: 2px 10px;
  cursor: pointer;
  color: beige;
}
.items:hover {
  color: rgb(74, 113, 74);
}

.fixed-top {
  position: fixed !important;
  top: 0px !important;
}
</style>