<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 contact">
        <h4>İletişim</h4>
        <p class="mt-3 p1">
          Gelişen teknolojiyi yakala
          <br />San. Tic. Ltd. Şti.
        </p>
        <p class="mt-3 p1">
          Ankara Teknoloji Vadisi No:12 Harman Kod Ankara / Califonia
          <br />Tahir Battal
        </p>
        <p class="mt-3 p1">
          +90 555 666 78 98
          <br />www.tahirbattal.com.tr
        </p>
        
        <Contact/>
        <!-- <form action>
          <div class="pb-3">
            <input
              type="text"
              name
              class="form-control"
              placeholder="* Adınız Soyadınız..."
              required
            />
          </div>
          <div class="pb-3">
            <input
              type="email"
              name
              class="form-control"
              placeholder="* Mail Adresiniz..."
              required
            />
          </div>
          <div class="pb-3">
            <input type="text" name class="form-control" placeholder="* Telefonunuz..." required />
          </div>
          <div class="pb-3">
            <input type="text" name class="form-control" placeholder="* Mesajınız..." required />
          </div>
          <div class="input-group pb-3">
            <a href="#" class="btn btn-info">Gönder</a>
            <a href="#" class="btn btn-warning text-danger ml-4">İptal</a>
          </div>
        </form> -->
      </div>
            <div class="col-lg-12  mt-4 map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.20789309376!2d32.62267927815148!3d39.90355566587426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1str!2str!4v1579953036966!5m2!1str!2str"
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0;"
          allowfullscreen
        ></iframe>
      </div>

    </div>
  </div>
</template>

<script>
import Contact from '@/components/contact/Contact'

export default {
  components:{
    Contact
  }
}
</script>

<style scoped>
.row {
  margin-top: 10%;
  margin-bottom: 10%;
}

.map {
  margin-top: 0px;
  height: 400px;
}

.contact {
  margin-top: 30px !important;
}
</style>