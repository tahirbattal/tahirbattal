<template>
  <div class="top">
    <div class="content-center">
      <div class="container">
        <h1 class="title text-danger ml-5"></h1>
      </div>
    </div>

    <div class="error">
      <div class="error-image"></div>
    </div>

    <h1 class="container mt-5 text-center">Hatalı işlem. Lütfen tekrar işlem yapınız.</h1>
  </div>
</template>

<style>
.top{
  margin-top: 150px;
  margin-bottom: 100px;
}
.error {
  overflow: hidden;
  width: 100%;
  min-height: 90vh;
  max-height: 440px;
  margin: 100px 0 0 0;
  padding: 0px;
  background-image: url("../assets/image/About/developer4.gif");
  background-blend-mode: soft-light;
  background-color: rgb(48, 42);
  background-size: cover;
  background-position: center center;
  position: relative;
  background-attachment: fixed;
  left: 0;
  top: 0;
}

.error-image {
  position: absolute;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
