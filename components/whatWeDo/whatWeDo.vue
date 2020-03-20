<template>
  <div>
    <section id="whatWeDo" class="py-2">
      <div class="container my-5 py5">
        <div class="row">
          <div class="col-md-12 text-center text-light">
            <h2>Biz Kimiz?</h2>
            <p class="text-white">
              <em>UI/UX Kullanıcı Deneyimli Web Tasarım</em>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md6 text-center mx-auto">
            <a href class="video" data-toggle="modal" data-target="#videoModal">
              <i class="far fa-play-circle fa-5x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- ---- -->

    <div id="videoModal" class="modal fade mt-5" role="dialog">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title text-light">İnananılmaz Web Tasatımları</h4>
            <button role="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <!-- <iframe
              width="100%"
              height="420"
              src="https://www.youtube.com/embed/GB3zR_X25UU"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding: 100px;
}

.modal-content {
  background-color: rgba(0, 0, 0, 0.8);
}

#whatWeDo {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("../../assets/image/bg-code.jpg") fixed center no-repeat;
  background-size: cover;
}
</style>