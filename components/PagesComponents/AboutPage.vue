<template>
  <div>
    <div class="page-header">
      <div class="page-header-image"></div>
      <div class="content-center">
        <div class="container">
          <h1 class="title"></h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-10 ml-auto mr-auto text-center">
            <h2 class="title text-info">Hakkımda</h2>
            <h5 class="description">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record low
              maximum sea ice extent tihs year down to low ice extent in the
              Pacific and a late drop in ice extent in the Barents Sea.
            </h5>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-10 ml-auto mr-auto text-center">
            <div>
              <img class="text-image" src="@/assets/image/About/developer1.jpg" />
            </div>

            <h3 class="title">
              So what does the new record for the lowest level of winter ice
              actually mean
            </h3>
            <div class="text-center text">
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>

              <p>
                For a start, it does not automatically follow that a record
                amount of ice will melt this summer. More important for
                determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise.
                But over the more than 30 years of satellite records, scientists
                have observed a clear pattern of decline, decade-by-decade.
              </p>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>
              <div>
                <img class="text-image1" src="@/assets/image/About/developer3.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-10 ml-auto mr-auto text-center">
            <div>
              <img class="text-image2" src="@/assets/image/About/developer2.png" />
            </div>

            <h3 class="title">
              So what does the new record for the lowest level of winter ice
              actually mean
            </h3>
            <div class="text-center text">
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>

              <p>
                For a start, it does not automatically follow that a record
                amount of ice will melt this summer. More important for
                determining the size of the annual thaw is the state of the
                weather as the midnight sun approaches and temperatures rise.
                But over the more than 30 years of satellite records, scientists
                have observed a clear pattern of decline, decade-by-decade.
              </p>
              <p>
                The Arctic Ocean freezes every winter and much of the sea-ice
                then thaws every summer, and that process will continue whatever
                happens with climate change. Even if the Arctic continues to be
                one of the fastest-warming regions of the world, it will always
                be plunged into bitterly cold polar dark every winter. And
                year-by-year, for all kinds of natural reasons, there’s huge
                variety of the state of the ice.
              </p>
              <div>
                <img class="text-image1" src="@/assets/image/About/developer5.gif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
.page-header {
  overflow: hidden;
  width: 100%;
  min-height: 50vh;
  max-height: 440px;
  margin: 0;
  padding: 0px;
  background-image: url("../../assets/image/header.jpg");
  background-blend-mode: soft-light;
  background-color: rgb(48, 42);
  background-size: cover;
  background-position: center center;
  position: relative;
  background-attachment: fixed;
  left: 0;
  top: 0;
}

.page-header-image {
  position: absolute;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.content-center {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(255, 255, 255);
  width: 100%;
  max-width: 880px;
  padding: 0px 15px;
}

.title {
  font-weight: 700;
  padding: 30px;
}

.description {
  color: rgb(154, 154, 154);
  font-weight: 300;
}

.text-center {
  text-align: center !important;
}

.section {
  background: rgb(255, 255, 255);
}

.text-image {
  width: 40%;
  height: 40%;
  margin: 5%;
  border: 0 solid black;
  border-radius: 30px;
  box-shadow: -8px 14px 30px 2px rgba(0, 0, 0, 0.4);
  float: left;
}
.text-image1 {
  width: 80%;
  height: 40%;
  margin: 5%;
  border: 0 solid black;
  border-radius: 30px;
  box-shadow: -8px 14px 30px 2px rgba(0, 0, 0, 0.4);
}

.text-image2 {
  width: 60%;
  height: 60%;
  margin: 5%;
  border: 0 solid black;
  border-radius: 30px;
  box-shadow: -8px 14px 30px 2px rgba(0, 0, 0, 0.4);
  float: right;
}

.text {
  margin-bottom: 10%;
}

/* .page-header1 {
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  max-height: 440px;
  margin: 0;
  padding: 0px;
  background-image: url("../../assets/image/About/developer1.jpg");
  background-blend-mode: soft-light;
  background-color: rgb(48, 42, 23);
  background-size: cover;
  background-position: center center;
  position: relative;
  background-attachment: fixed;
  left: 0;
  top: 0;
}

.page-header-image1 {
  position: absolute;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
} */

.content-center1 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  text-align: center;
  color: rgb(255, 255, 255);
  width: 100%;
  max-width: 880px;
  padding: 0px 15px;
}
</style>