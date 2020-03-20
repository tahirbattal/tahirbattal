<template>
  <div class="container-fluid">
    <div class="section">
      <div class="row">
        <div class="col-md-12 col-lg-6">
          <div class="image-container">
            <img
              class="components-macbook"
              src="@/assets/image/KayanFigures/laptop-basic.png"
              alt
            />

            <router-link tag="div" to="/Blog">
              <img class="table-img" src="@/assets/image/KayanFigures/3.gif" alt />
            </router-link>

            <router-link tag="div" to="/#">
              <img class="share-btn-img" src="@/assets/image/KayanFigures/share-btn.png" alt />
            </router-link>

            <router-link tag="div" to="/#">
              <img
                class="coloured-card-btn-img"
                src="@/assets/image/KayanFigures/coloured-card-with-btn.png"
                alt
              />
            </router-link>

            <router-link tag="div" to="/#">
              <img
                class="coloured-card-img"
                src="@/assets/image/KayanFigures/js.gif"
                alt
              />
            </router-link>

            <router-link tag="div" class="social-img" to="/#">
              <img class="social-img" height="auto" src="@/assets/image/KayanFigures/social-row.png" alt />
            </router-link>

            <router-link tag="div" to="/#">
              <img class="pin-btn-img " src="@/assets/image/logo.png" alt />
            </router-link>
          </div>
        </div>
        <div class="col-md-9 col-lg-4  mr-auto">
          <div class="container basic-container">
            <h3 class="title">Kullanıcı Deneyimi Odaklı Web Projesi</h3>
            <h6 class="category">Dijital bir maceraya hazır mısınız?</h6>
            <h5 class="description">
              Dijital Strateji ve Pazarlama, Sosyal Medya Kampanyaları ve Reklam Yönetimi, Görsel & Grafik Tasarım, Dijital PR, UX & UI, Web ve Program Yazılımı, Influencer Çalışmaları.
            </h5>
          </div>
        </div>

        <!-- <div class="col-md-12 col-lg-9 ml-auto mr-auto">
          <div class="container basic-container2">
            <h3 class="title">Basic Components</h3>
            <h6 class="category">The core elements of your website</h6>
            <h5 class="description">
              We re-styled every Bootstrap 4 element
              to match the Paper Kit style. All the Bootstrap 4 components that you
              need in a development have been re-design with the new look. Besides the
              numerous basic elements, we have also created additional classes. All
              these items will help you take your project to the next level.
            </h5>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.section {
  position: relative;
  background-color: transparent;
}
@media only screen and (min-width: 1600px) {
  /* XL */
  .section {
    padding: 70px 0;
    margin-top: 3%;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  /* XL */
  .section {
    padding: 70px 0;
    margin-top: 3%;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .section {
    padding: 70px 0;
    margin-top: 3%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .section {
    padding: 60px 0;
    margin-top: 3%;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .section {
    padding: 40px 0;
    margin-top: 5%;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .section {
    padding: 30px 0;
    margin-top: 13%;
  }
}

.image-container {
  position: relative;
}
@media only screen and (min-width: 1600px) {
  /* XL */
  .image-container {
    height: 750px;
  }
}
@media only screen and (min-width: 1200px) and (max-width: 1599px) {
  /* XL */
  .image-container {
    height: 560px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container {
    height: 560px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container {
    height: 460px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container {
    height: 300px;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .image-container {
    height: 200px;
  }
}

.image-container .components-macbook {
  width: auto;
  left: -100px;
  top: 0;
  height: 100%;
  position: absolute;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .image-container .components-macbook {
    left: -100px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container .components-macbook {
    left: -90px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container .components-macbook {
    left: 7%;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container .components-macbook {
    left: 10%;
  }
}
@media only screen and (min-width: 450px) and (max-width: 575px) {
  /* XS */
  .image-container .components-macbook {
    left: 20%;
  }
}
@media only screen and (max-width: 450px) {
  /* XxS */
  .image-container .components-macbook {
    left: -1.5%;
  }
}

/* .components-macbook {
  left: -75px !important;
} */

.image-container .table-img {
  left: 65%;
  top: 22%;
  height: 175px;
  border-radius: 6px;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .image-container .table-img {
    left: 65%;
    top: 22%;
    height: 175px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container .table-img {
    height: 130px;
    left: 82%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container .table-img {
    height: 100px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container .table-img {
    height: 80px;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .image-container .table-img {
    left: 60%;
    height: 50px;
  }
}

.image-container .table-img,
.image-container .share-btn-img,
.image-container .coloured-card-btn-img,
.image-container .coloured-card-img,
.image-container .social-img,
.image-container .pin-btn-img {
  position: absolute;
  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
}

.table-img {
  animation-duration: 14s;
  -moz-animation-duration: 14s;
  animation-name: Floatingx;
  -moz-animation-name: Floatingx;
  cursor: pointer;
}

.table-img,
.coloured-card-img,
.coloured-card-btn-img,
.pin-btn-img,
.share-btn-img,
.social-img {
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: ease-in-out;
  animation-name: Floatingy;
  -moz-animation-name: Floatingy;
  float: left;
}

.image-container .share-btn-img {
  left: 70%;
  top: 67%;
  height: 20px;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .image-container .share-btn-img {
    height: 20px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container .share-btn-img {
    height: 19px;
    left: 100%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container .share-btn-img {
    height: 15px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container .share-btn-img {
    height: 10px;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .image-container .share-btn-img {
    height: 10px;
  }
}

.share-btn-img {
  animation-duration: 11s;
  -moz-animation-duration: 11s;
  cursor: pointer;
}

.image-container .coloured-card-btn-img {
  left: 35%;
  top: 2%;
  height: 125px;
  border-radius: 6px;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .image-container .coloured-card-btn-img {
    height: 125px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container .coloured-card-btn-img {
    height: 120px;
    left: 45%;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container .coloured-card-btn-img {
    height: 90px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container .coloured-card-btn-img {
    height: 70px;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .image-container .coloured-card-btn-img {
    height: 50px;
  }
}

.coloured-card-btn-img {
  animation-duration: 18s;
  -moz-animation-duration: 18s;
  cursor: pointer;
}

.image-container .coloured-card-img {
  left: -3%;
  top: 40%;
  height: 90px;
  border-radius: 6px;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .image-container .coloured-card-img {
    height: 90px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container .coloured-card-img {
    height: 80px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container .coloured-card-img {
    height: 60px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container .coloured-card-img {
    height: 40px;
    left: 10%;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .image-container .coloured-card-img {
    height: 35px;
    left: 7%;
  }
}

.coloured-card-img {
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  cursor: pointer;
}

.image-container .social-img {
  left: -4%;
  top: 68%;
  height: 40px;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .image-container .social-img {
    height: 40px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container .social-img {
    height: 35px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container .social-img {
    height: 30px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container .social-img {
    left: 5%;
    height: 20px;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .image-container .social-img {
    left: 10%;
    height: 10px;
  }
}

.social-img {
  animation-duration: 16s;
  -moz-animation-duration: 16s;
  animation-name: Floatingx;
  -moz-animation-name: Floatingx;
  cursor: pointer;
}

.image-container .pin-btn-img {
  left: 3%;
  top: 7%;
  border-radius: 10px;
  cursor: pointer;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .image-container .pin-btn-img {
    height: 45px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .image-container .pin-btn-img {
    height: 20px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .image-container .pin-btn-img {
    height: 35px;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .image-container .pin-btn-img {
    height: 35px;
    left: 10%;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .image-container .pin-btn-img {
    height: 20px;
    left: 7%;
  }
}

.pin-btn-img {
  
  animation-duration: 15s;
  -moz-animation-duration: 15s;
  animation-name: Floatingx;
  -moz-animation-name: Floatingx;
  cursor: pointer;
}

.basic-container {
  margin-top: 50%;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .basic-container {
    margin-left: 5em;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .basic-container {
    margin-left: 5em;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .basic-container {
    margin-left: 1em;
    margin-top: 0;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .basic-container {
    margin-left: 1em;
    margin-top: 0;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .basic-container {
    margin-left: 1em;
    margin-top: 0;
  }
}

.basic-container2 {
  margin-left: 5em;
}
@media only screen and (min-width: 1200px) {
  /* XL */
  .basic-container2 {
    margin-left: 5em;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  /* L */
  .basic-container2 {
    margin-left: 1em;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* M */
  .basic-container2 {
    margin-left: 9em;
  }
}
@media only screen and (min-width: 576px) and (max-width: 767px) {
  /* S */
  .basic-container2 {
    margin-left: 1em;
  }
}
@media only screen and (max-width: 575px) {
  /* XS */
  .basic-container2 {
    margin-left: 1em;
  }
}

.title {
  margin-top: 60px;
  margin-bottom: 5px;
}
h3.title {
  font-size: 2.1em;
}

.title {
  margin-top: 30px;
  margin-bottom: 25px;
  min-height: 32px;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  color: #fff !important;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}
.title,
.title a {
  color: #333;
  text-decoration: none;
}
.h3,
h3 {
  font-size: 1.825em;
  line-height: 1.4;
  margin: 20px 0 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-weight: 300;
}

.category,
.description {
  color: hsla(0, 0%, 100%, 0.7);
}

.description {
  margin-top: 35px;
}

@keyframes Floatingx {
  0% {
    transform: translate(50px);
  }
  65% {
    transform: translate(0px);
  }
  100% {
    transform: translate(50px);
  }
}

@keyframes Floatingy {
  0% {
    transform: translate(0px);
  }
  65% {
    transform: translate(50px);
  }
  100% {
    transform: translate(0px);
  }
}
</style>